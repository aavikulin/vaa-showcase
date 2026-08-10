#!/usr/bin/env python3
"""Privacy-preserving visit counter and daily Telegram reporter."""

from __future__ import annotations

import argparse
import json
import os
import sqlite3
import sys
import threading
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timedelta
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any
from zoneinfo import ZoneInfo


ROOT = Path(__file__).resolve().parent
DEFAULT_DB_PATH = ROOT / "data" / "visits.sqlite3"
DEFAULT_HOST = "127.0.0.1"
DEFAULT_PORT = 8019
DEFAULT_TZ = "Europe/Moscow"
DEFAULT_PROJECTS = {
    "vaa-showcase": "VAA Showcase",
}


def db_path() -> Path:
    return Path(os.environ.get("VISIT_COUNTER_DB", str(DEFAULT_DB_PATH))).expanduser()


def timezone() -> ZoneInfo:
    return ZoneInfo(os.environ.get("VISIT_COUNTER_TZ", DEFAULT_TZ))


def project_labels() -> dict[str, str]:
    raw = os.environ.get("VISIT_COUNTER_PROJECT_LABELS", "").strip()
    if not raw:
        return DEFAULT_PROJECTS
    try:
        parsed = json.loads(raw)
    except json.JSONDecodeError:
        return DEFAULT_PROJECTS
    if not isinstance(parsed, dict):
        return DEFAULT_PROJECTS
    labels = {str(key): str(value) for key, value in parsed.items() if str(key).strip()}
    return labels or DEFAULT_PROJECTS


def allowed_projects() -> set[str]:
    return set(project_labels())


def env_flag(name: str, default: bool = False) -> bool:
    value = os.environ.get(name)
    if value is None:
        return default
    return value.strip().lower() in {"1", "true", "yes", "y", "on"}


def connect() -> sqlite3.Connection:
    path = db_path()
    path.parent.mkdir(parents=True, exist_ok=True)
    connection = sqlite3.connect(path, timeout=10)
    connection.execute("PRAGMA journal_mode=WAL")
    connection.execute("PRAGMA busy_timeout=5000")
    init_db(connection)
    return connection


def init_db(connection: sqlite3.Connection) -> None:
    connection.execute(
        """
        CREATE TABLE IF NOT EXISTS daily_visits (
            day TEXT NOT NULL,
            project TEXT NOT NULL,
            visits INTEGER NOT NULL DEFAULT 0,
            updated_at TEXT NOT NULL,
            PRIMARY KEY (day, project)
        )
        """
    )
    connection.execute(
        """
        CREATE TABLE IF NOT EXISTS sent_reports (
            day TEXT NOT NULL,
            destination TEXT NOT NULL,
            sent_at TEXT NOT NULL,
            PRIMARY KEY (day, destination)
        )
        """
    )
    connection.commit()


def today() -> str:
    return datetime.now(timezone()).date().isoformat()


def increment(project: str, day: str | None = None) -> int:
    if project not in allowed_projects():
        raise ValueError(f"Unknown project: {project}")
    current_day = day or today()
    updated_at = datetime.now(timezone()).isoformat(timespec="seconds")
    with connect() as connection:
        connection.execute(
            """
            INSERT INTO daily_visits (day, project, visits, updated_at)
            VALUES (?, ?, 1, ?)
            ON CONFLICT(day, project) DO UPDATE SET
                visits = visits + 1,
                updated_at = excluded.updated_at
            """,
            (current_day, project, updated_at),
        )
        row = connection.execute(
            "SELECT visits FROM daily_visits WHERE day = ? AND project = ?",
            (current_day, project),
        ).fetchone()
        connection.commit()
    return int(row[0]) if row else 0


def visits_for_day(day: str) -> dict[str, int]:
    labels = project_labels()
    counts = {project: 0 for project in labels}
    with connect() as connection:
        rows = connection.execute(
            "SELECT project, visits FROM daily_visits WHERE day = ? ORDER BY project",
            (day,),
        ).fetchall()
    for project, visits in rows:
        counts[str(project)] = int(visits)
    return counts


def render_report(day: str, counts: dict[str, int]) -> str:
    labels = project_labels()
    total = sum(counts.values())
    lines = [
        "Daily web visits",
        f"Date: {day}",
        f"Total: {total}",
        "",
    ]
    for project, label in labels.items():
        lines.append(f"{label}: {counts.get(project, 0)}")
    lines.extend(["", "Privacy: stored only day, project, aggregated count."])
    return "\n".join(lines)


def send_telegram(message: str) -> None:
    token = os.environ.get("VISIT_COUNTER_TELEGRAM_BOT_TOKEN", "").strip()
    chat_id = os.environ.get("VISIT_COUNTER_TELEGRAM_CHAT_ID", "").strip()
    if not token or not chat_id:
        raise RuntimeError("VISIT_COUNTER_TELEGRAM_BOT_TOKEN and VISIT_COUNTER_TELEGRAM_CHAT_ID are required")
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    payload_fields = {
        "chat_id": chat_id,
        "text": message,
        "disable_web_page_preview": "true",
    }
    message_thread_id = os.environ.get("VISIT_COUNTER_TELEGRAM_MESSAGE_THREAD_ID", "").strip()
    if message_thread_id:
        payload_fields["message_thread_id"] = message_thread_id
    payload = urllib.parse.urlencode(payload_fields).encode("utf-8")
    request = urllib.request.Request(
        url,
        data=payload,
        headers={"Content-Type": "application/x-www-form-urlencoded"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(request, timeout=20) as response:
            if response.status >= 400:
                raise RuntimeError(f"Telegram returned HTTP {response.status}")
    except urllib.error.URLError as exc:
        raise RuntimeError(f"Telegram request failed: {exc}") from exc


def send_visit_notification(project: str, day: str, count: int) -> None:
    labels = project_labels()
    label = labels.get(project, project)
    message = "\n".join(
        [
            "Новое посещение",
            f"Проект: {label}",
            f"Дата: {day}",
            f"Сегодня по проекту: {count}",
            "",
            "Приватность: IP, user-agent, cookies и URL не сохраняются и не отправляются.",
        ]
    )
    send_telegram(message)


def notify_visit_async(project: str, day: str, count: int) -> None:
    if not env_flag("VISIT_COUNTER_NOTIFY_EACH_VISIT", False):
        return

    def worker() -> None:
        try:
            send_visit_notification(project, day, count)
        except Exception:
            return

    threading.Thread(target=worker, daemon=True).start()


def report_sent(day: str, destination: str) -> bool:
    with connect() as connection:
        row = connection.execute(
            "SELECT 1 FROM sent_reports WHERE day = ? AND destination = ?",
            (day, destination),
        ).fetchone()
    return row is not None


def mark_report_sent(day: str, destination: str) -> None:
    sent_at = datetime.now(timezone()).isoformat(timespec="seconds")
    with connect() as connection:
        connection.execute(
            """
            INSERT OR REPLACE INTO sent_reports (day, destination, sent_at)
            VALUES (?, ?, ?)
            """,
            (day, destination, sent_at),
        )
        connection.commit()


def report(day: str | None = None, *, force: bool = False, dry_run: bool = False) -> str:
    report_day = day or (datetime.now(timezone()).date() - timedelta(days=1)).isoformat()
    destination = os.environ.get("VISIT_COUNTER_TELEGRAM_CHAT_ID", "").strip() or "stdout"
    message = render_report(report_day, visits_for_day(report_day))
    if dry_run:
        return message
    if report_sent(report_day, destination) and not force:
        return f"Report for {report_day} already sent to {destination}"
    send_telegram(message)
    mark_report_sent(report_day, destination)
    return f"Report for {report_day} sent to {destination}"


class VisitHandler(BaseHTTPRequestHandler):
    server_version = "VisitCounter/1.0"

    def log_message(self, _format: str, *_args: Any) -> None:
        return

    def send_no_content(self) -> None:
        self.send_response(HTTPStatus.NO_CONTENT)
        self.send_header("Cache-Control", "no-store, max-age=0")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.end_headers()

    def do_OPTIONS(self) -> None:
        self.send_no_content()

    def do_GET(self) -> None:
        parsed = urllib.parse.urlsplit(self.path)
        if parsed.path == "/health":
            body = b"ok\n"
            self.send_response(HTTPStatus.OK)
            self.send_header("Content-Type", "text/plain; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        self.handle_visit(parsed)

    def do_POST(self) -> None:
        self.handle_visit(urllib.parse.urlsplit(self.path))

    def handle_visit(self, parsed: urllib.parse.SplitResult) -> None:
        if parsed.path not in {"/visit", "/visit.gif", "/_visit"}:
            self.send_error(HTTPStatus.NOT_FOUND)
            return
        params = urllib.parse.parse_qs(parsed.query, keep_blank_values=True)
        project = str(params.get("project", [""])[0]).strip()
        day = today()
        try:
            count = increment(project, day=day)
        except ValueError:
            self.send_error(HTTPStatus.BAD_REQUEST, "Unknown project")
            return
        except Exception:
            self.send_error(HTTPStatus.INTERNAL_SERVER_ERROR)
            return
        notify_visit_async(project, day, count)
        self.send_no_content()


def serve(host: str, port: int) -> None:
    with connect():
        pass
    server = ThreadingHTTPServer((host, port), VisitHandler)
    print(f"Visit counter listening on http://{host}:{port}")
    server.serve_forever()


def main() -> int:
    parser = argparse.ArgumentParser(description="Privacy-preserving visit counter")
    subparsers = parser.add_subparsers(dest="command", required=True)

    serve_parser = subparsers.add_parser("serve", help="Run HTTP counter service")
    serve_parser.add_argument("--host", default=os.environ.get("VISIT_COUNTER_HOST", DEFAULT_HOST))
    serve_parser.add_argument("--port", type=int, default=int(os.environ.get("VISIT_COUNTER_PORT", DEFAULT_PORT)))

    report_parser = subparsers.add_parser("report", help="Send daily Telegram report")
    report_parser.add_argument("--date", help="Report date as YYYY-MM-DD; defaults to yesterday")
    report_parser.add_argument("--force", action="store_true", help="Send even if this date was already reported")
    report_parser.add_argument("--dry-run", action="store_true", help="Print the report without sending it")

    stats_parser = subparsers.add_parser("stats", help="Print JSON stats for one day")
    stats_parser.add_argument("--date", default=today())

    args = parser.parse_args()
    if args.command == "serve":
        serve(args.host, args.port)
        return 0
    if args.command == "report":
        print(report(args.date, force=args.force, dry_run=args.dry_run))
        return 0
    if args.command == "stats":
        print(json.dumps({"date": args.date, "visits": visits_for_day(args.date)}, ensure_ascii=False, indent=2))
        return 0
    return 2


if __name__ == "__main__":
    sys.exit(main())

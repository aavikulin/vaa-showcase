# AGENT.md

## Project Scope

This repository contains two independently deployed components:

1. A bilingual AI engineer portfolio built with plain HTML, CSS, and JavaScript. It has no package manager, framework, or build step.
2. A standard-library-only Python visit counter that stores aggregate daily totals in SQLite and can send Telegram reports.

The frontend uses Google Fonts at runtime. CV PDF export, when enabled, lazy-loads `html2canvas` and `jsPDF` from CDNs.

## Repository Map

### Static site

- `index.html` - canonical GitHub Pages entry point.
- `AI Engineer Showcase Design System/Showcase.html` - standalone/local entry point.
- `AI Engineer Showcase Design System/styles.css` - all site styling and responsive rules.
- `AI Engineer Showcase Design System/app.js` - Russian/English content, state, rendering, navigation, project modals/media, and CV PDF generation.
- `AI Engineer Showcase Design System/page-visibility.config.js` - visibility flags for pages and CV PDF download.
- `AI Engineer Showcase Design System/visit-counter-client.js` - once-per-browser-session visit reporting.
- `AI Engineer Showcase Design System/assets/` - site images, video, GIF, and SVG assets.
- `.github/workflows/pages.yml` - publishes only `index.html` and `AI Engineer Showcase Design System/` to GitHub Pages.

`index.html` and `Showcase.html` are parallel shells. Keep their stylesheet/script order, visit-counter configuration, and cache-busting versions aligned while preserving their different relative paths, document language, and default name.

### Visit counter

- `visit-counter/visit_counter.py` - HTTP service and `serve`, `stats`, and `report` CLI commands.
- `visit-counter/deploy/systemd/` - production service and daily-report timer units.
- `visit-counter/README.md` - service operation and deployment notes.

The counter listens on `127.0.0.1:8019` by default and accepts `/visit`, `/visit.gif`, and `/_visit`. Its default SQLite database is `visit-counter/data/visits.sqlite3`; runtime database files are ignored. The systemd units assume `/root/vaa-showcase/visit-counter` and `/etc/visit-counter.env`.

The counter is not part of the GitHub Pages artifact. The published site sends visits to the full HTTPS endpoint configured in both HTML entry points.

## Running Locally

Serve the repository root so both entry points use normal HTTP behavior:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/` or `http://localhost:8000/AI%20Engineer%20Showcase%20Design%20System/Showcase.html`.

Opening either HTML file directly also works for most frontend development, but the visit-counter client intentionally skips `file:` URLs. When served over HTTP, the current HTML configuration reports to the production counter; avoid polluting production statistics during repeated local testing.

Run the counter from the repository root with:

```bash
python visit-counter/visit_counter.py serve
python visit-counter/visit_counter.py stats
python visit-counter/visit_counter.py report --dry-run
```

Use a disposable `VISIT_COUNTER_DB` path for counter tests. Do not test against production data or send a real Telegram report unless explicitly requested.

## Working Rules

- Keep the frontend dependency-free unless the user explicitly asks otherwise; do not introduce a build tool for a small change.
- Prefer focused edits in the existing files over new abstractions.
- Do not rename `AI Engineer Showcase Design System/` unless HTML paths and the Pages workflow are updated together.
- Keep Russian and English structures in `DATA` aligned when adding or changing visible content.
- Preserve hash-based navigation, `localStorage` preferences, keyboard accessibility, and responsive behavior.
- Add assets through `assetUrl(...)` in `app.js` so both HTML entry points resolve them correctly.
- Treat `page-visibility.config.js` as the source of truth for navigation and page availability. A disabled current page must fall back to the first visible page.
- Update matching query-string cache busters in both HTML entry points whenever browser-facing CSS or JavaScript changes.
- Do not rewrite unrelated content or normalize encoding across the project unless requested.
- Treat `visit-counter/telegram.env`, Telegram credentials, and deployment environment files as sensitive: do not display, duplicate, or modify them unless the task explicitly requires it.
- Preserve the counter's privacy model: store aggregate counts only; do not add IP addresses, user agents, cookies, referrers, or per-visitor records.
- Keep SQLite schema changes backward-compatible with existing production data, and update all affected systemd paths if the deployment layout changes.
- Preserve unrelated uncommitted changes as user work.

## Visual Direction

- Match the current minimal, mono, compact dark/light portfolio style.
- Avoid decorative bloat, deeply nested cards, and large marketing sections.
- Keep interactions keyboard-accessible and avoid layout shifts from hover or dynamic text.
- Check narrow mobile widths as well as desktop layouts after visual changes.

## Verification

There is no automated test suite. Run syntax checks appropriate to the files changed:

```bash
node --check "AI Engineer Showcase Design System/app.js"
node --check "AI Engineer Showcase Design System/page-visibility.config.js"
node --check "AI Engineer Showcase Design System/visit-counter-client.js"
python -c "from pathlib import Path; compile(Path('visit-counter/visit_counter.py').read_text(encoding='utf-8'), 'visit_counter.py', 'exec')"
```

For frontend changes, manually verify the relevant behavior in both entry points:

- initial render and enabled-page navigation
- URL hash navigation and invalid-page fallback
- Russian/English switching and dark/light theme switching
- project modal, media, external links, and close controls
- CV PDF export if its visibility flag or PDF code changed
- desktop and mobile-width layouts

For counter changes, use a disposable database and verify `/health`, one visit request, `stats`, and `report --dry-run`. Confirm the response remains suitable for cross-origin fire-and-forget requests from the static site.

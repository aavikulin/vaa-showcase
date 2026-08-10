# visit-counter

Privacy-preserving visit counter for `vaa-showcase`.

The service stores only aggregated daily counts by project:

- `day`
- `project`
- `visits`
- `updated_at`

It does not store IP addresses, user agents, cookies, URLs, or referrers.

## Run Locally

```bash
python visit_counter.py serve
```

Health check:

```bash
curl http://127.0.0.1:8019/health
```

Record one visit:

```bash
curl -X POST "http://127.0.0.1:8019/_visit?project=vaa-showcase"
```

Show stats:

```bash
python visit_counter.py stats
```

Dry-run a Telegram report without sending:

```bash
python visit_counter.py report --dry-run
```

## Website Integration

The static site loads `AI Engineer Showcase Design System/visit-counter-client.js`.
By default it sends a single page-load hit to:

```txt
/_visit?project=vaa-showcase
```

For GitHub Pages, route this path to the counter service with a reverse proxy or set a full endpoint in `window.VISIT_COUNTER_CONFIG.endpoint`.

## Environment

Copy `.env.example` to the environment file used by your process manager, for example `/etc/visit-counter.env`.

`VISIT_COUNTER_PROJECT_LABELS` can be a JSON object if more projects are added:

```env
VISIT_COUNTER_PROJECT_LABELS={"vaa-showcase":"VAA Showcase"}
```

## Systemd

Example units are in `deploy/systemd/`.

Install:

```bash
sudo cp deploy/systemd/visit-counter*.service deploy/systemd/visit-counter*.timer /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now visit-counter.service
sudo systemctl enable --now visit-counter-daily-report.timer
```

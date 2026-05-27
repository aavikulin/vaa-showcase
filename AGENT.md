# AGENT.md

## Project

Static AI engineer showcase site. There is no package manager, build step, or framework.

Entry points:

- `index.html` - root page for GitHub Pages-style hosting.
- `AI Engineer Showcase Design System/Showcase.html` - direct local page.
- `AI Engineer Showcase Design System/styles.css` - all styling.
- `AI Engineer Showcase Design System/app.js` - data, rendering, UI behavior.
- `AI Engineer Showcase Design System/page-visibility.config.js` - page visibility flags.
- `AI Engineer Showcase Design System/assets/` - images and video.

## How To Run

Open `index.html` or `AI Engineer Showcase Design System/Showcase.html` directly in a browser.

If browser security or media paths get in the way, serve the repo root with any static server and open `/index.html`.

## Working Rules

- Keep the project dependency-free unless the user explicitly asks otherwise.
- Prefer small edits in existing files over new abstractions.
- Do not rename `AI Engineer Showcase Design System/` unless deployment paths are updated too.
- Preserve query-string cache busting on linked CSS/JS when changing browser-facing assets.
- Do not rewrite unrelated content or normalize encoding across the project unless requested.
- Treat existing uncommitted changes as user work.

## Frontend Notes

- Match the current minimal mono, dark/light, compact portfolio style.
- Keep responsive behavior explicit; check narrow and desktop widths after layout changes.
- Avoid decorative bloat, nested cards, and large marketing sections.
- Keep controls keyboard-accessible and avoid layout shifts from hover or dynamic text.

## Verification

For content or style changes, manually check:

- initial render
- page navigation
- language switch
- theme switch
- project modal/details
- mobile-width layout

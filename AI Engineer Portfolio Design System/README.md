# AI Engineer Portfolio — Design System

## Overview

This design system supports a personal portfolio website for an AI engineer. The product is a single-surface website presenting professional work, projects, writing, and contact information. The aesthetic is intentionally minimal, technical, and precise — rooted in a code/terminal sensibility rather than typical "creative agency" design language.

**Source materials provided:** None (built from description: "portfolio ai-engineer website, simple clear design, consolas font")

---

## Products

| Surface | Description |
|---|---|
| Portfolio Website | Single-page or multi-page personal site; project showcases, about, writing/blog, contact |

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Direct.** No filler phrases like "I'm passionate about…" or "I specialize in…". Say the thing.
- **Technical but legible.** Write for a smart generalist, not just engineers. Avoid jargon unless necessary.
- **First person ("I").** This is a personal site; own it.
- **Lowercase-leaning.** Section labels, nav items, and UI labels are often lowercase (e.g. "about", "work", "contact"). Titles use sentence case, not Title Case.
- **No emoji.** The design uses no emoji — it would conflict with the terminal aesthetic.
- **Dates and metadata** use ISO-adjacent formats (e.g. "2024", "Jan 2024") not verbose forms.

### Copy Examples
- Nav: `about`, `work`, `writing`, `contact`
- CTA: `view project →`, `read more →`, `get in touch`
- Section intro: "A few things I've built recently." (not "Here are some exciting projects!")
- Bio: "I build systems at the intersection of language models and software engineering."

---

## VISUAL FOUNDATIONS

### Colors
A tight 2-mode (light/dark) palette. No color splashes, no gradients.

| Token | Light | Dark | Usage |
|---|---|---|---|
| `--bg` | `#FAFAF9` | `#111110` | Page background |
| `--bg-2` | `#F2F2F0` | `#1C1C1B` | Subtle surface (cards, code) |
| `--bg-3` | `#E8E8E6` | `#282826` | Hover states, borders |
| `--fg` | `#111110` | `#F0F0EE` | Primary text |
| `--fg-2` | `#6B6B69` | `#8A8A88` | Secondary text / labels |
| `--fg-3` | `#ABABAA` | `#555554` | Placeholder / disabled |
| `--border` | `#E2E2E0` | `#2A2A28` | Dividers and borders |
| `--accent` | `#1C64F2` | `#3B82F6` | Links, highlights, focus rings |
| `--accent-subtle` | `#EFF6FF` | `#1E3A5F` | Accent backgrounds |
| `--green` | `#059669` | `#34D399` | Terminal green, "success" |

### Typography
- **Font family**: Consolas → **JetBrains Mono** (Google Fonts substitute — see note below)
- **Single typeface system**: one font family for everything; hierarchy is expressed through size, weight, and color — not font mixing.
- **Scale** (rem-based, root 16px):

| Token | Size | Weight | Usage |
|---|---|---|---|
| `--text-xl` | 2.5rem (40px) | 500 | Page title / hero |
| `--text-lg` | 1.5rem (24px) | 500 | Section headings |
| `--text-md` | 1.125rem (18px) | 400 | Sub-headings, emphasis |
| `--text-base` | 1rem (16px) | 400 | Body copy |
| `--text-sm` | 0.875rem (14px) | 400 | Labels, metadata |
| `--text-xs` | 0.75rem (12px) | 400 | Captions, footnotes |

- **Line height**: 1.6 for body; 1.2 for headings
- **Letter spacing**: −0.01em for headings; 0 for body

### Spacing
8px base unit. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px.

### Backgrounds
- **No gradients.** Flat color only.
- **No background images** on the main site.
- Code blocks and inline code use `--bg-2` with a 1px `--border` border.
- Page sections separated by `--border` hairlines, not shading.

### Borders & Radius
- **Border**: 1px solid `--border`; no double borders
- **Radius**: very low — `2px` for small elements (tags, badges); `4px` for cards/inputs; `0` is also acceptable and used for a hard-edge terminal feel.

### Shadows
- Mostly **no shadows**. The aesthetic is flat.
- One optional subtle shadow for floating elements (tooltips, dropdowns): `0 4px 12px rgba(0,0,0,0.08)`.

### Animation
- **Minimal.** Transitions only on `color`, `background-color`, `opacity`, `border-color`.
- Duration: `150ms`; easing: `ease`.
- No bounces, no spring physics, no entrance animations for content.
- Links and buttons: `color` and `opacity` transitions only.

### Hover / Press States
- Links: `--fg` (not underline by default; underline on hover)
- Buttons: `background-color` darkens (or lightens in dark mode) by one step
- Tags/chips: `background-color` → `--bg-3`
- Press: slight `opacity: 0.8` — no scale transforms

### Cards
- Flat rectangle; `background: --bg-2`; `border: 1px solid --border`; `border-radius: 4px`; no shadow.
- Padding: `24px`
- Hover: border color transitions to `--fg-3`

### Layout
- Max content width: `720px` for text; `960px` for full layout
- Single-column default; two-column project grid on wide viewports
- Navigation: minimal top bar, left-aligned name + right-aligned links; no sticky by default

### Iconography — summary
No icon library. Unicode arrows (`→`, `↗`, `←`) and minimal SVG used as needed. See ICONOGRAPHY section.

### Color Vibe of Imagery
- If photography used: desaturated/muted, no warm-filter stock photos.
- Code screenshots preferred over decorative imagery.

---

## ICONOGRAPHY

No dedicated icon system. The portfolio uses:
- **Unicode arrows**: `→` (navigate), `↗` (external link), `←` (back)
- **Minimal inline SVG** for specific cases (e.g. GitHub/social logos)
- **No icon font**, no Lucide/Heroicons, no emoji icons

Social icons (GitHub, LinkedIn, etc.) are drawn as simple 16–20px SVGs in the `--fg-2` color, transitioning to `--fg` on hover.

---

## FILES

| Path | Description |
|---|---|
| `README.md` | This file — full brand and design guidelines |
| `colors_and_type.css` | CSS custom properties for all design tokens |
| `assets/` | Logos, SVG icons |
| `preview/` | Visual design system cards (registered in Design System tab) |
| `ui_kits/portfolio/` | UI kit for the portfolio website |
| `SKILL.md` | Agent skill definition |

---

## Font Note

**Consolas** is a proprietary Microsoft font not available on Google Fonts. This design system uses **JetBrains Mono** as a near-identical substitute (same monospace aesthetic, similar metrics, open source). If you have a Consolas license and want to embed it, drop `Consolas.woff2` into `fonts/` and update the `@font-face` rule in `colors_and_type.css`.

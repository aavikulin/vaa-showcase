# UI Kit — Portfolio Website

## Overview
High-fidelity click-through prototype of the AI engineer portfolio site. Four pages: about, work, writing, contact. Built with React + JetBrains Mono.

## Components

| Component | Description |
|---|---|
| `Nav` | Top nav bar with name/cursor + links. Props: `name`, `links`, `active`, `onNav` |
| `Tag` | Small chip. Variants: `default`, `accent`, `green`, `dark` |
| `Button` | CTA button. Variants: `primary`, `secondary`, `ghost`. Sizes: `md`, `sm` |
| `ProjectCard` | Project tile with title, year, description, tags, link |
| `WritingRow` | Blog post row with title, date, readTime, tags |
| `Section` | Page section with uppercase label and children |
| `ContactForm` | Email + message form with sent state |
| `Footer` | Bottom bar with copyright and social icons |

## Usage

```html
<!-- Load components -->
<script type="text/babel" src="Components.jsx"></script>

<!-- Use in your app -->
<Nav name="your name" active="work" onNav={setPage}/>
<ProjectCard title="My project" year="2024" description="..." tags={["python"]}/>
```

## Design Width
960px layout, 720px prose max-width, 48px side padding.

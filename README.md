# asc-engineering

Personal website and resume for Dr. Andreas Schlapbach, built with Astro and the
[ASC Engineering Design System](../asc-engineering-design-system).

**Live:** https://asc-engineering.netlify.app

## Stack

- [Astro 6](https://astro.build/) — static site generator
- [TailwindCSS v4](https://tailwindcss.com/) — utility-first CSS via
  `@tailwindcss/vite`
- [@asc-engineering/design-system](../asc-engineering-design-system) — local
  component library (Card, Badge, Avatar, Stack, Header, Footer, Button,
  IconButton, Container)

## Development

```bash
pnpm install
pnpm dev        # localhost:4321
pnpm build      # output → dist/
pnpm preview    # preview the build
```

## Deploy

Hosted on Netlify. To redeploy manually:

```bash
pnpm build
netlify deploy --dir=dist --prod --site=9395bcfb-314c-45ee-9da8-c369bfbbfe63
```

## Project structure

```
src/
  pages/
    index.astro           # home page
    about.astro           # about me
    work.astro            # experience, skills, projects
    publications.astro    # academic publications
    speaking.astro        # conference talks
    opensource.astro      # open source contributions
    hobbies.astro         # personal interests
    contact.astro         # contact form
    404.astro             # not found page
    sitemap.xml.ts        # sitemap generator
    robots.txt.ts         # robots.txt generator
  data/
    work.ts               # experience, skills, projects data + techUrls mapping
    publications.ts       # publications data
    speaking.ts           # talks data
    opensource.ts         # contributions data + techUrls mapping
  components/
    sections/             # page sections
    layout/               # layout components
  styles/
    global.css            # Tailwind v4 setup + design tokens + @source for design system
public/
  favicon.svg
  favicon.ico
  resume.txt
  papers/                 # PDF publications
```

## Design system integration

The design system is linked as a local `file:` dependency. Tailwind v4 requires
an explicit `@source` directive in `global.css` to scan the design system's
component files (node_modules are excluded from automatic scanning by default):

```css
@source "../../node_modules/@asc-engineering/design-system/src";
```

Dark mode uses Tailwind's class strategy configured via:

```css
@variant dark (&:where(.dark, .dark *));
```

The `dark` class is toggled on `<html>` by a script that reads from
`localStorage` (with OS preference as fallback).

## Features

### Clickable projects and tags

All project cards and technology tags are clickable, linking to official
documentation or relevant resources. URL mappings are maintained in `techUrls`
objects in:

- `src/data/work.ts` — maps skills and project technologies to URLs
- `src/data/opensource.ts` — maps contribution tags to URLs

### Custom sections

Several sections use custom implementations instead of design system patterns to
support clickable elements:

- `ProjectsSection` — clickable project cards with clickable tech tags
- `FeaturedWorkSection` — same as ProjectsSection with border styling
- `SkillsSection` — skill cards with clickable skill badges
- `OpenSourceSection` — contribution cards with clickable tags

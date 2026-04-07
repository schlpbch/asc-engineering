# asc-engineering

Personal website and resume for Dr. Andreas Schlapbach, built with Astro and the [MCP Orchestrator Design System](../mcp-orchestrator-design-system).

**Live:** https://asc-engineering.netlify.app

## Stack

- [Astro 6](https://astro.build/) — static site generator
- [TailwindCSS v4](https://tailwindcss.com/) — utility-first CSS via `@tailwindcss/vite`
- [@mcp-orchestrator/design-system](../mcp-orchestrator-design-system) — local component library (Card, Badge, Avatar, Stack, Header, Footer, Button, IconButton, Container)

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
    index.astro       # single-page resume
  styles/
    global.css        # Tailwind v4 setup + design tokens + @source for design system
public/
  favicon.svg
  favicon.ico
```

## Design system integration

The design system is linked as a local `file:` dependency. Tailwind v4 requires an explicit `@source` directive in `global.css` to scan the design system's component files (node_modules are excluded from automatic scanning by default):

```css
@source "../../node_modules/@mcp-orchestrator/design-system/src";
```

Dark mode uses Tailwind's class strategy configured via:

```css
@variant dark (&:where(.dark, .dark *));
```

The `dark` class is toggled on `<html>` by a script that reads from `localStorage` (with OS preference as fallback).

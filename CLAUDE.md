# CLAUDE.md

## Project overview

Single-page resume website for Dr. Andreas Schlapbach. Static Astro site using a local design system.

**Live:** https://asc-engineering.netlify.app  
**Repo:** https://github.com/schlpbch/asc-engineering

## Commands

```bash
pnpm dev       # dev server at localhost:4321
pnpm build     # build to dist/
pnpm preview   # preview build
pnpm lint      # check code with strict ESLint rules
pnpm lint:fix  # auto-fix ESLint issues
```

## Deploy

```bash
pnpm build
netlify deploy --dir=dist --prod --site=9395bcfb-314c-45ee-9da8-c369bfbbfe63 --auth=<token>
```

Token is stored at `~/.netlify/config.json`.

## Release

```bash
# Check current version in package.json, update if needed (semantic versioning)
git tag -a vX.Y.Z -m "Release notes"
git push origin vX.Y.Z
gh release create vX.Y.Z --title "vX.Y.Z" --notes "Formatted release notes"
```

## Architecture

- **Framework:** Astro 6 (static output)
- **CSS:** TailwindCSS v4 via `@tailwindcss/vite` Vite plugin — no `tailwind.config.js`, all config in `src/styles/global.css`
- **Design system:** `@mcp-orchestrator/design-system` linked as `file:../mcp-orchestrator-design-system`
- **Single page:** everything lives in `src/pages/index.astro`; all resume data is plain TypeScript arrays/objects at the top of that file

## Strict mode

- **TypeScript:** `tsconfig.json` extends `astro/tsconfigs/strict` (strictest available)
- **ESLint:** `eslint.config.mjs` enforces strict rules via typescript-eslint:
  - `no-console` (warn), `no-debugger` (error)
  - `no-unused-vars`, `prefer-const`, `eqeqeq`, `no-any` (warn)
  - `.astro` files excluded (Astro syntax limitations)

## Key decisions and gotchas

### Tailwind v4 must scan the design system explicitly
`node_modules` are excluded from Tailwind v4's automatic content detection. Without this line in `global.css` the design system components render completely unstyled:
```css
@source "../../node_modules/@mcp-orchestrator/design-system/src";
```

### Dark mode class strategy
Tailwind v4 dark mode must be configured with a custom variant to respond to the `.dark` class on `<html>`:
```css
@variant dark (&:where(.dark, .dark *));
```
Without this, `dark:` utilities compile to `@media (prefers-color-scheme: dark)` and the toggle button has no effect.

### Design system imports
Import components directly by path to avoid Astro version mismatch issues:
```ts
import Card from '@mcp-orchestrator/design-system/components/Card.astro';
```

### Google Fonts loading strategy
Google Fonts is loaded as async `<link>` tags in `BaseLayout.astro` (not via CSS `@import`) to avoid render-blocking. The pattern uses `media="print" onload="this.media='all'"` with `<noscript>` fallback, plus `rel="preconnect"` hints for `fonts.googleapis.com` and `fonts.gstatic.com`.

## Components used from design system

| Component | Usage |
|---|---|
| `Header` | Sticky nav with mobile hamburger, logo/nav/actions slots |
| `Footer` | Minimal variant with brand + copyright |
| `Container` | Max-width wrapper (`maxWidth="4xl"`) for all sections |
| `Stack` | Flex layout for hero, experience bullets, skill badges, project internals |
| `Card` | Experience entries (`default`), skill groups (`filled`), project cards (`interactive`) |
| `Badge` | Skill pills (`primary`), period labels (`outline`), project tech tags (`outline`) |
| `Avatar` | Hero initials block (`initials="AS"`) |
| `Button` | Email, GitHub, LinkedIn links in hero (renders as `<a>` when `href` is set) |
| `IconButton` | Dark mode toggle in header actions slot |

## Updating resume content

All content is in `src/pages/index.astro` — edit the three arrays near the top:
- `experience` — work history entries
- `skills` — object of `{ category: string[] }`
- `projects` — project cards with name, description, tech, href

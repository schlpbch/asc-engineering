# CLAUDE.md

## Project overview

Single-page resume website for Dr. Andreas Schlapbach. Static Astro site using a
local design system.

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
- **CSS:** TailwindCSS v4 via `@tailwindcss/vite` Vite plugin — no
  `tailwind.config.js`, all config in `src/styles/global.css`
- **Design system:** `@asc-engineering/design-system` linked as
  `file:../asc-engineering-design-system`
- **Multi-page structure:** separate pages for work, publications, speaking,
  open source, hobbies, about, and contact
- **Data separation:** content stored in TypeScript files under `src/data/`
  (work.ts, publications.ts, speaking.ts, opensource.ts)

## Strict mode

- **TypeScript:** `tsconfig.json` extends `astro/tsconfigs/strict` (strictest
  available)
- **ESLint:** `eslint.config.mjs` enforces strict rules via typescript-eslint:
  - `no-console` (warn), `no-debugger` (error)
  - `no-unused-vars`, `prefer-const`, `eqeqeq`, `no-any` (warn)
  - `.astro` files excluded (Astro syntax limitations)

## Key decisions and gotchas

### Tailwind v4 must scan the design system explicitly

`node_modules` are excluded from Tailwind v4's automatic content detection.
Without this line in `global.css` the design system components render completely
unstyled:

```css
@source "../../node_modules/@asc-engineering/design-system/src";
```

### Dark mode class strategy

Tailwind v4 dark mode must be configured with a custom variant to respond to the
`.dark` class on `<html>`:

```css
@variant dark (&:where(.dark, .dark *));
```

Without this, `dark:` utilities compile to `@media (prefers-color-scheme: dark)`
and the toggle button has no effect.

### Design system imports

Import components directly by path to avoid Astro version mismatch issues:

```ts
import Card from '@asc-engineering/design-system/components/Card.astro';
```

### Google Fonts loading strategy

Google Fonts is loaded as async `<link>` tags in `BaseLayout.astro` (not via CSS
`@import`) to avoid render-blocking. The pattern uses
`media="print" onload="this.media='all'"` with `<noscript>` fallback, plus
`rel="preconnect"` hints for `fonts.googleapis.com` and `fonts.gstatic.com`.

### Clickable projects and technology tags

All project cards and technology tags are interactive and link to official
documentation or relevant resources:

- Projects link to their repositories, live sites, or official pages
- Technology tags link to official docs (TypeScript → typescriptlang.org, React
  → react.dev, etc.)
- URL mappings are centralized in `techUrls` objects in `src/data/work.ts` and
  `src/data/opensource.ts`
- Tags without URLs fall back to non-clickable badges
- Clicking a tag in a project card uses `event.stopPropagation()` to prevent
  triggering the parent project link

The following custom sections were created to support clickable elements:

- `ProjectsSection.astro` — replaces `ProjectGrid` pattern
- `FeaturedWorkSection.astro` — replaces `ProjectGrid` pattern with border
- `SkillsSection.astro` — replaces `SkillsGrid` pattern
- `OpenSourceSection.astro` — custom implementation with clickable tags

## Components used from design system

| Component    | Usage                                                                                  |
| ------------ | -------------------------------------------------------------------------------------- |
| `Header`     | Sticky nav with mobile hamburger, logo/nav/actions slots                               |
| `Footer`     | Minimal variant with brand + copyright                                                 |
| `Container`  | Max-width wrapper (`maxWidth="4xl"`) for all sections                                  |
| `Stack`      | Flex layout for hero, experience bullets, skill badges, project internals              |
| `Card`       | Experience entries (`default`), skill groups (`filled`), project cards (`interactive`) |
| `Badge`      | Skill pills (`primary`), period labels (`outline`), project tech tags (`outline`)      |
| `Avatar`     | Hero initials block (`initials="AS"`)                                                  |
| `Button`     | Email, GitHub, LinkedIn links in hero (renders as `<a>` when `href` is set)            |
| `IconButton` | Dark mode toggle in header actions slot                                                |

## Updating resume content

All content is stored in separate TypeScript files under `src/data/`:

- `work.ts` — experience, skills, projects, and tech URL mappings
- `publications.ts` — academic publications
- `speaking.ts` — conference talks and presentations
- `opensource.ts` — open source contributions and tech URL mappings

### Adding clickable links to new technologies

When adding new technologies to projects or skills, add their URLs to the
`techUrls` mapping in the relevant data file:

```ts
export const techUrls: Record<string, string> = {
  TypeScript: 'https://www.typescriptlang.org/',
  React: 'https://react.dev/',
  // Add new entries here
};
```

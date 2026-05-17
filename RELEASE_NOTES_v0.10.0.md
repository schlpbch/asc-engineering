# v0.10.0 - Interactive Multi-Page Architecture

## 🎉 What's New

### Multi-Page Architecture
- Migrated from single-page to multi-page structure with dedicated routes for:
  - Work experience, skills, and projects
  - Publications and academic work
  - Speaking engagements
  - Open source contributions
  - Personal hobbies and interests
  - About and contact pages

### Interactive Features
- **Clickable Projects**: All project cards now link to their repositories, live sites, or official pages
- **Clickable Technology Tags**: Technology and skill badges link to official documentation
  - Centralized URL mappings in `techUrls` objects
  - Smart fallback for tags without URLs
  - Prevents event bubbling with `event.stopPropagation()` for nested links

### Data Separation
- Content now stored in separate TypeScript files under `src/data/`:
  - `work.ts` — experience, skills, projects, tech URLs
  - `publications.ts` — academic publications
  - `speaking.ts` — conference talks
  - `opensource.ts` — open source contributions, tech URLs

### Custom Section Components
Replaced design system patterns with custom implementations for better interactivity:
- `ProjectsSection` — clickable project cards with tech tags
- `FeaturedWorkSection` — featured work with border styling
- `SkillsSection` — skill cards with clickable badges (color-coded by expertise level)
- `OpenSourceSection` — contribution cards with clickable tags

### Removed Features
- Removed testimonials feature (pages, data, components, and routes)

### Documentation
- Updated README.md and CLAUDE.md to reflect new architecture
- Added project structure documentation
- Documented clickable elements and URL mapping patterns

---

**Full Changelog**: https://github.com/schlpbch/asc-engineering/compare/v0.9.0...v0.10.0

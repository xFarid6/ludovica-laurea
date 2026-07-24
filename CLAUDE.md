# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal one-page gift site: a graduation celebration webapp for Ludovica (Chemistry degree), lilac-themed. Not a product — content is Italian, tone is personal/playful, and most "work" here is content edits, not feature engineering.

## Commands

```bash
npm install
npm run dev       # Vite dev server
npm run build      # tsc -b && vite build
npm run lint       # oxlint
npm run preview    # preview production build
```

No test suite exists in this repo.

## Architecture

- **Single-page app**: [src/App.tsx](src/App.tsx) just stacks section components in order (Hero, Timeline, InvestigationPlayground, Gallery, Diploma, PeriodicCard, GuestbookWall) inside `<main>`, plus a fixed `FloatingBackground`, `Navbar`, and `Footer`. Adding/reordering sections means editing this list.
- **Content/component split**: all real content lives in a single typed `content` object in [src/data/content.ts](src/data/content.ts) (hero, timeline, investigation clues, gallery, videos, diploma, periodic card, guestbook, events, footer). Components import `content` and read from it — edit content there, not in the components, unless changing layout/behavior.
- **Curated photos** (`crown-wink`, `crown-smile`, `lab-coat`) live in `src/assets/photos/`, get imported directly in the components that use them (Hero, Diploma, Gallery), and are referenced by key (`content.gallery[].src`) in a small lookup dict in `Gallery.tsx`.
- **Full media dump**: [src/data/mediaIndex.ts](src/data/mediaIndex.ts) is auto-generated — do not hand-edit. It indexes every photo/video that's been compressed/copied into `public/gallery/` and `public/videos/` from the raw phone dump. Regenerate with the two scripts in `scripts/` (see README) whenever the source dump changes. `Gallery.tsx` renders this as the "every photo" section at the bottom.
- **InvestigationPlayground** is a flip-card mini-game built from `content.investigation.clues` — each clue is a card that flips on tap/Enter/Space to reveal a real forensic-chemistry technique (Raman, SEM-EDX, ICP-MS, LIBS). Finding all four triggers a one-shot teal "flash" (CSS `animate-flash`) plus a confetti verdict modal.
- **`useReveal`** ([src/hooks/useReveal.ts](src/hooks/useReveal.ts)) is a small IntersectionObserver hook for scroll-triggered fade-ups (used by `Timeline`); it resolves immediately under `prefers-reduced-motion: reduce` instead of waiting on a trigger.
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` (no separate Tailwind config file — the theme is defined inline in [src/index.css](src/index.css) using `@theme` with `lilac`/`bloom` (affection) and `science` (teal, used sparingly for tech tags/glow) color scales, plus animation keyframes gated off entirely under `prefers-reduced-motion: reduce`). Fonts are Quicksand (display) and Poppins (body). Global `:focus-visible` ring is defined once in `index.css`, not per-component.
- **Deploy**: GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) builds and publishes `dist/` to GitHub Pages on push to `main`. `base` in [vite.config.ts](vite.config.ts) is hardcoded to `/ludovica-laurea/` — if the repo is ever renamed, that and the favicon reference in `index.html` must be updated together to match.
- **Tests** stub `IntersectionObserver` and `window.matchMedia` in [src/test/setup.ts](src/test/setup.ts) — jsdom implements neither, and `useReveal` needs both.

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

- **Single-page app**: [src/App.tsx](src/App.tsx) just stacks section components in order (Hero, Timeline, InvestigationPlayground, Gallery, Diploma, PeriodicCard, GuestbookWall, Footer) inside `<main>`, plus a fixed `FloatingBackground` and `Navbar`. Adding/reordering sections means editing this list.
- **Content/component split**: all real content (name, thesis title, timeline events, gallery captions, guestbook messages, investigation clues, easter-egg element) lives in [src/data/content.ts](src/data/content.ts), typed and exported as plain objects/arrays. Components import from here rather than hardcoding text — edit content there, not in the components, unless changing layout/behavior.
- **Gallery photos are wired manually**: photos live in `src/assets/photos/`, get imported at the top of [src/components/Gallery.tsx](src/components/Gallery.tsx), then referenced by assigning `src: <imported>` to the matching entry in `galleryPhotos` (content.ts). Until that's done, entries render as placeholders (caption only, no image).
- **InvestigationPlayground** is a mini interactive "case" built from the `clues` array in content.ts — each clue is a hotspot positioned by `x`/`y` percentages over a scene; finding all of them triggers the `caseSolved` state.
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` (no separate Tailwind config file — the theme is defined inline in [src/index.css](src/index.css) using `@theme` with a custom `lilac`/`bloom` color scale and animation keyframes). Fonts are Quicksand (display) and Poppins (body).
- **Deploy**: GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) builds and publishes `dist/` to GitHub Pages on push to `main`. `base` in [vite.config.ts](vite.config.ts) is hardcoded to `/ludovica-laurea/` — if the repo is ever renamed, that and the favicon reference in `index.html` must be updated together to match.

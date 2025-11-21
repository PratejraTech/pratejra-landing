# Repository Guidelines

## Project Structure & Module Organization
Source lives in `src/`, where `main.tsx` mounts `App.tsx` and routes through `src/components`. Feature slices follow a layout/sections breakdown (`components/layout/Navbar.tsx`, `components/sections/*`) while shared logic is tucked into `src/hooks` and `src/utils`. Configuration, palettes, and copy live under `src/constants` and `src/types`, so extend those modules before sprinkling literals through views. Generated assets land in `build/`, and static files (logos, favicons, fonts) belong in `public/`. Reuse `src/styles` for global Tailwind layers and tokens so the design system stays consistent.

## Build, Test, and Development Commands
- `npm install` (or `bun install`): sync dependencies defined in `package.json`.
- `npm run dev`: start Vite with hot reloading at http://localhost:5173 for rapid UI iteration.
- `npm run build`: emit the optimized bundle into `build/`; run this before publishing or submitting a PR to ensure tree-shaking succeeds.

## Coding Style & Naming Conventions
The stack is React + TypeScript + Tailwind. Use 2-space indentation, arrow functions for handlers, and PascalCase for components (`MissionObjectives`) while hooks and utilities stay camelCase (`useProjectDescriptions`, `formatProject`). Favor composition: stitch styles with `clsx`/`class-variance-authority`, and merge Tailwind clashes with `tailwind-merge`. Keep shared types in `src/types` and pass them through props instead of duplicating unions. Prefer early returns over deeply nested conditionals to match the current files.

## Testing Guidelines
There is no automated test harness yet, so lean on targeted manual QA. Before opening a PR, click through the active navigation toggles, the carousel interactions, and the external links fired from `ProjectsCarousel` to catch regressions. Run `npm run build` as a smoke test; Vite’s type-checking will surface most compile-time issues. If you add tests later, colocate them next to the component (`HeroSection.test.tsx`) and name suites after the feature.

## Commit & Pull Request Guidelines
History favors short, imperative subject lines (`Fixed menu items`, `Refactored`), so follow the same style and reference an issue ID when applicable (`Add mission data #42`). Each PR should summarize scope, list reproducible steps, and include screenshots or recordings for visual edits. Link back to the relevant design in Figma and mention any environment toggles or feature flags touched. Always note if additional setup (new env vars, updated assets) is required so reviewers can rebuild locally without surprises.

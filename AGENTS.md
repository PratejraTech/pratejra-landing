# Repository Guidelines

## Project Structure & Module Organization
All source files live in `src/`, where `main.tsx` bootstraps `App.tsx` and funnels UI through `src/components`. Shared layouts sit in `components/layout/`, feature content in `components/sections/*`, and reusable logic inside `src/hooks` and `src/utils`. Keep constants, tokens, and copy under `src/constants` and `src/types`, then import those rather than duplicating literals. Tailwind primitives are centralized in `src/styles`. Build artifacts should remain in `build/`, and static items (icons, favicons, fonts) belong in `public/`. When you add tests later, colocate them as `FeatureName.test.tsx` beside the component for quick discovery.

## Build, Test, and Development Commands
- `npm install` or `bun install`: install dependencies listed in `package.json`.
- `npm run dev`: launch Vite on http://localhost:5173 with hot-module reload for UI iteration.
- `npm run build`: produce the optimized bundle in `build/` and run the TypeScript checker; treat this as the pre-PR smoke test.

## Coding Style & Naming Conventions
The project uses React, TypeScript, and Tailwind with 2-space indentation. Components follow PascalCase (`MissionObjectives`), hooks/utilities stay camelCase (`useProjectDescriptions`, `formatProject`). Prefer arrow functions for event handlers, early returns over nested branches, and composition via `clsx` or `class-variance-authority`. Resolve Tailwind conflicts with `tailwind-merge`, and surface shared color or copy changes through `src/constants` rather than inline values.

## Testing Guidelines
There is no automated suite yet, so rely on focused manual QA. Before submitting work, click through the Navbar toggles, hero actions, and `ProjectsCarousel` links to confirm state sync and animation timing. Run `npm run build` to let Vite catch type regressions. New automated tests should mirror the component layout and use feature-based describe blocks for clarity.

## Commit & Pull Request Guidelines
Commits should use short, imperative subjects mirroring existing history (e.g., `Tighten hero headline`, `Add mission data #42`). For every PR, include: a concise scope summary, reproduction steps, screenshots or recordings for visual tweaks, links to the relevant issue or Figma frame, and notes about env vars or assets that reviewers must pull. Confirm `npm run build` passes before requesting review and highlight any manual QA performed so reviewers can follow the same path.

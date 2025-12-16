# Repository Guidelines

## Project Structure & Module Organization
This is a Next.js App Router project. Route segments, layouts, and server components live in `app/`, while API handlers sit under `app/api/*`. UI primitives stay in `src/components` (group feature blocks under `components/sections/*` and shared shells under `components/layout/`). Keep shared logic in `src/hooks`, `src/utils`, and `src/lib`, with design tokens and copy centralized in `src/constants`, `src/types`, and `src/styles`. Prisma schema and migrations are under `prisma/`, and all static assets (icons, fonts, OG images) belong in `public/`. Colocate any future tests as `FeatureName.test.tsx` beside the component they cover.

## Build, Test, and Development Commands
- `npm install` or `bun install`: install dependencies defined in `package.json`.
- `npm run dev`: start Next.js locally on http://localhost:3000 with hot reload.
- `npm run build`: create the production bundle and run the Next.js type checks.
- `npm run lint` / `npm run lint:fix`: execute ESLint with the Next config.
- `npm run type-check`: run `tsc --noEmit` for faster iteration on types.
- `npm run verify`: chained `type-check` and `build` for pre-PR validation.

## Coding Style & Naming Conventions
Use TypeScript with 2-space indentation, React Server Components by default, and Tailwind utilities defined in `tailwind.config.js`. Components are PascalCase (`MissionObjectives`), hooks and helpers stay camelCase (`useProjectDescriptions`, `formatProject`). Favor arrow functions, early returns, and composition via `clsx`/`class-variance-authority`, then resolve Tailwind collisions with `tailwind-merge`. Reference shared tokens from `src/constants` rather than scattering literals, and keep environment-specific values in `.env.local` (never commit secrets).

## Testing Guidelines
There is no dedicated test suite yet, so rely on manual QA. Before sharing work, click through navigation states, hero CTAs, and any interactive sliders/carousels, then watch for console or hydration warnings. Run `npm run type-check`, `npm run lint`, and `npm run build`; treat any failure as a blocker because these commands match the deploy pipeline. When you add automated tests later, colocate them next to the component with feature-based `describe` blocks for clarity.

## Commit & Pull Request Guidelines
Commits should be short, imperative statements that mirror the existing history (`Align pricing CTA`, `Add mission data #42`). Every PR should include: a concise scope summary, reproduction steps, screenshots or recordings for visual changes, links to relevant tickets or Figma frames, and notes about environment variables, seeds, or assets that reviewers must pull. Confirm `npm run verify` passes and document any manual QA so reviewers can reproduce it quickly.

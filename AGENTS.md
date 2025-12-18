# Repository Guidelines

## Project Structure & Module Organization
Next.js App Router code sits in `app/` with layouts, route groups, and API handlers defaulting to server components. UI primitives live in `src/components` (`sections/*` for marketing slices, `layout/*` for shells). Shared utilities and state stay under `src/lib`, `src/hooks`, and `src/constants`. Database schema and migrations are in `prisma/`, assets in `public/`, scripts and automation in `scripts/` or `tasks/`. When tests are added, colocate them beside the feature as `FeatureName.test.tsx`.

## Build, Test, and Development Commands
- `bun install` — install dependencies (use Bun everywhere for parity).
- `bun run dev` — start Next.js locally on `localhost:3000`.
- `bun run build` — produce the production bundle and type-check.
- `bun run lint` / `bun run lint:fix` — run ESLint and optionally apply fixes.
- `bun run type-check` — run `tsc --noEmit`.
- `bun run verify` — full production readiness pipeline.

## Coding Style & Naming Conventions
TypeScript strict mode with 2-space indentation and ES2022 target. Components are PascalCase arrow functions; hooks/utilities use camelCase (`useNetworkAlert`, `formatGuardianTag`). Prefer server components unless interactivity demands client wrappers. Imports are grouped React → external → internal using `@/*` aliases. Tailwind plus `clsx`, `class-variance-authority`, and `tailwind-merge` power styling—compose utilities rather than ad hoc CSS. Avoid `any`; rely on interfaces or discriminated unions, and keep prop names explicit.

## Testing Guidelines
Until tests exist, ensure new APIs or flows include manual verification notes in PRs. Once suites are introduced, colocate them with their owners, cover role-based permissions, emergency contact triggers, and shader fallbacks, and wire them to a future `bun run test`. Favor deterministic fixtures so low-resourced contributors can reproduce failures quickly.

## Commit & Pull Request Guidelines
Commits should be short, imperative summaries (`fix: align guardian color tokens`) with optional detail bodies describing context and risks. Pull requests must reference issues or tasks, describe user impact, list verification steps (`bun run verify` minimum), and attach screenshots/recordings for UI mutations. Call out security-sensitive changes (auth, rate limiting, encryption) to trigger deeper review.

## Security & Configuration Tips
Store credentials in `.env.local` managed via your secrets vault; never commit them. JWT keys, Prisma URLs, and mail credentials are required for a working portal, so validate envs with `bun run verify` before pushing. Maintain least privilege in role logic, sanitize inputs touching community data, and avoid telemetry or tracking SDKs to honor the “no surveillance” promise.

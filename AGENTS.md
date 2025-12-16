# Agent Guidelines for Pratejra Landing

## Commands
- **Install**: `bun install` (always use bun)
- **Dev**: `bun run dev` (Next.js on localhost:3000)
- **Build**: `bun run build` (production bundle + type checks)
- **Lint**: `bun run lint` / `bun run lint:fix` (ESLint with Next config)
- **Type Check**: `bun run type-check` (tsc --noEmit)
- **Verify**: `bun run verify` (type-check + build + deploy ready check)
- **Test**: No tests yet - use `echo "No tests specified"` placeholder

## Code Style
- **Language**: TypeScript strict mode, 2-space indentation, ES2022 target
- **Imports**: Use `@/*` path aliases, group by: React, external libs, internal modules
- **Components**: PascalCase, arrow functions, Server Components by default
- **Hooks/Functions**: camelCase (`useProjectDescriptions`, `formatProject`)
- **Styling**: Tailwind via `clsx` + `class-variance-authority` + `tailwind-merge`
- **Types**: Strict typing, no `any`, use interfaces for objects, prefer unions over enums
- **Error Handling**: Try/catch for async operations, throw descriptive errors, no silent failures
- **Naming**: Descriptive names, early returns, composition over inheritance

## Cursor Rules
Follow `.cursor/rules/react_vite.mdc`: READ project structure first, MAP changes to correct files, PLAN minimal changes, APPLY conservatively, TEST thoroughly, REFLECT on changes. Never change build system, routing, or introduce breaking changes without explicit instruction.

## Project Structure
- `app/`: Next.js App Router (routes, layouts, API handlers)
- `src/components/`: UI primitives (sections/* for features, layout/* for shells)
- `src/lib/`: Shared logic (auth, prisma, utils)
- `src/hooks/`: Custom React hooks
- `src/constants/`: Design tokens and copy
- `prisma/`: Database schema and migrations
- Tests: Colocate as `FeatureName.test.tsx` beside components (when added)

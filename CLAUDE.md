# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Package Manager

Always use `bun` as the package manager. All commands should use `bun` instead of `npm` or `yarn`.

## Development Commands

```bash
# Development
bun dev                    # Start development server (NODE_ENV=development)
bun build                  # Build for production
bun start                  # Start production server
bun lint                   # Run ESLint
bun lint:fix              # Auto-fix linting issues
bun type-check            # Run TypeScript type checking + Prisma generate

# Analysis & Verification
bun build:analyze         # Generate bundle analysis (ANALYZE=true)
bun verify                # Full verification: type-check + build
bun test                  # Run tests (currently placeholder)

# Prisma
bun prisma:generate       # Generate Prisma client
# Note: Prisma client is auto-generated on postinstall

# Deployment
bun deploy                # Deploy to Cloudflare Pages
bun deploy:preview        # Deploy preview branch to Cloudflare Pages
bun deploy:vercel         # Deploy to Vercel (production)
bun deploy:netlify        # Deploy to Netlify (production)

# Docker
bun docker:build          # Build Docker image (sets DOCKER_BUILD=true)
bun docker:run            # Run Docker container on port 3000
bun docker:build:run      # Build and run in one command

# Maintenance
bun clean                 # Remove .next, build, and cache directories
```

## Architecture Overview

### Framework & Stack
- **Next.js 15** with App Router (app directory)
- **TypeScript** for type safety
- **Tailwind CSS** for styling with custom design system
- **Prisma** for database ORM (SQLite default, configurable)
- **Bun** as the runtime and package manager

### Build Output
- Build directory: `build/` (configured for Cloudflare Pages)
- Development builds use standard Next.js output
- Docker builds use `standalone` output mode

### Project Structure

```
app/                       # Next.js App Router
├── api/                  # API routes
│   ├── analytics/       # Analytics endpoints
│   ├── auth/            # Authentication (login, register, logout, refresh, verify)
│   ├── health/          # Health check endpoint
│   ├── messages/        # Contact messages
│   └── projects/        # Project data endpoints
├── portal/              # Protected portal section (requires auth)
├── about/               # About page
├── allies/              # Allies/partners page
├── contact/             # Contact page
├── philosophy/          # Philosophy page
├── services/            # Services page
├── layout.tsx           # Root layout with metadata
├── page.tsx             # Home page
├── globals.css          # Global styles + Tailwind config
└── sitemap.ts           # Dynamic sitemap generation

src/
├── components/          # React components
│   ├── figma/          # Figma design components
│   ├── layout/         # Layout components
│   ├── portal/         # Portal-specific components
│   ├── sections/       # Page sections (Hero, Features, etc.)
│   └── ui/             # Radix UI components (shadcn/ui pattern)
├── lib/                # Library code
│   ├── auth/           # Authentication utilities (JWT, PGP)
│   ├── prisma.ts       # Prisma client singleton
│   ├── rate-limit.ts   # Rate limiting
│   └── audit.ts        # Audit logging
├── hooks/              # Custom React hooks
│   ├── useCarouselAutoRotate.ts
│   ├── useMouseTrail.ts
│   ├── useProjectDescriptions.ts
│   └── useScrollAnimation.ts
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── constants/          # Application constants
└── workflows/          # Workflow definitions

prisma/
├── schema.prisma       # Prisma schema definition
└── migrations/         # Database migration history

middleware.ts           # Next.js middleware (auth + domain validation)
```

## Authentication & Security

### Middleware Protection
- **Domain Validation**: Requests are validated against `ALLOWED_DOMAINS` (pratejra.build, alexandermoir.com, localhost)
- **Protected Routes**: `/portal` routes require authentication
- **Public Routes**: `/portal/login` is accessible without auth
- **Token Verification**: JWT tokens stored in `auth-token` cookie
- **Email Restrictions**: Only emails in `ALLOWED_EMAILS` can access protected routes

### Authentication Flow
1. User logs in at `/portal/login` → API route at `app/api/auth/login`
2. JWT token generated and stored in HTTP-only cookie
3. Middleware validates token on protected route access
4. Token refresh available at `app/api/auth/refresh`
5. Logout clears token at `app/api/auth/logout`

### Security Headers
Configured in `next.config.js`:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Strict-Transport-Security: max-age=31536000
- Referrer-Policy: origin-when-cross-origin
- Permissions-Policy: Restrictive defaults

## Prisma Database

### Configuration
- Schema: `prisma/schema.prisma`
- Default datasource: SQLite (`file:./dev.db`)
- Override with `DATABASE_URL` environment variable
- Client auto-generated on `postinstall` and before type-checking

### Key Models
Review `prisma/schema.prisma` for current data models. Commonly includes:
- User authentication tables
- Contact messages
- Project data
- Analytics/audit logs

## Styling & Design System

### Tailwind Configuration
- Custom color palettes: `community`, `hope`, `wisdom`, `guardian`
- Design tokens via CSS variables (in `app/globals.css`)
- Custom animations: float, glow, shimmer, morph, float-3d, glow-pulse, morph-blob, tilt-3d
- Glassmorphism utilities: backdrop-blur, custom shadows
- Extended border-radius scales

### Component Library
- Built on **Radix UI** primitives (shadcn/ui pattern)
- Components in `src/components/ui/`
- Follow existing component patterns when adding new UI elements
- Use `class-variance-authority` (cva) for component variants
- Utility: `cn()` function for className merging

### Fonts
- Sans: Inter
- Mono: JetBrains Mono

## Deployment Targets

### Cloudflare Pages (Primary)
- Build command: `bun run build`
- Build output: `build/`
- Configuration: `wrangler.toml`
- Node.js compatibility enabled
- API routes may conflict with Pages Functions (see next.config.js)

### Vercel
- Auto-detects Next.js configuration
- Use `bun deploy:vercel` for production

### Netlify
- Build command: `bun run build`
- Publish directory: `build/`

### Docker
- Dockerfile included
- Uses `standalone` output mode when `DOCKER_BUILD=true`
- Runs on port 3000

## Development Guidelines

### Code Style
- Follow existing TypeScript patterns
- Use existing cursor rules in `.cursor/rules/react_vite.mdc` as general guidance (READ → MAP → PLAN → APPLY → TEST → REFLECT)
- Prefer composition over duplication
- Keep changes minimal and scoped

### Type Safety
- Always run `bun type-check` before committing
- Prisma types auto-generated - don't modify manually
- Use TypeScript strict mode

### Component Development
1. Place new components in appropriate `src/components/` subdirectory
2. Use existing UI components from `src/components/ui/`
3. Follow Radix UI + Tailwind patterns
4. Ensure responsive design (mobile-first)
5. Test dark mode compatibility

### API Development
1. Create routes in `app/api/[feature]/route.ts`
2. Use Prisma client from `src/lib/prisma.ts`
3. Implement rate limiting where appropriate
4. Add audit logging for sensitive operations
5. Return proper HTTP status codes
6. API routes have `no-cache` headers by default

### Production Readiness
This architecture is designed to be production-ready:
- Always ensure security headers are maintained
- Test authentication flows thoroughly
- Verify Prisma migrations before deploying
- Run `bun verify` before deployment
- Check bundle size with `bun build:analyze`

## Environment Variables

Required variables (see `.env.example`):
- `DATABASE_URL` - Database connection string (defaults to SQLite)
- `NODE_ENV` - Environment mode (development/production)
- `NEXT_PUBLIC_SITE_URL` - Public site URL
- `NEXT_PUBLIC_API_URL` - API base URL
- Authentication secrets (JWT_SECRET, etc.)

## Known Configurations

### Next.js Config
- Output directory: `build/` (not `.next`)
- Bundle analyzer available with `ANALYZE=true`
- CSS optimization disabled (critters issue)
- Image optimization: WebP, AVIF formats
- Compression enabled
- API routes have `externalResolver: true`

### ESLint
- Configuration may have issues (noted in package.json scripts)
- Does not affect deployment
- Use `bun lint:fix` to auto-fix

## Testing
Currently, tests are placeholder (`echo "No tests specified"`). When implementing tests:
- Follow existing project patterns
- Test authentication flows
- Test API endpoints
- Test critical user interactions
- Ensure tests pass before deployment

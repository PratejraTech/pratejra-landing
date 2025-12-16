# Agent Guidelines for Pratejra - Community Cybersecurity Platform

## Product Overview: Complete Reimagining

**Pratejra** is a revolutionary cybersecurity platform that provides **free, ethical protection** specifically designed for community organizations, non-profits, activists, and cultural stewards who cannot afford traditional security solutions.

### Core Mission & Vision
```
VISION: A world where every community organization has access to enterprise-grade
cybersecurity, regardless of budget or technical expertise.

MISSION: To be the trusted guardian of digital spaces for those who protect others,
providing free, ethical, and accessible cybersecurity solutions.
```

### Unique Value Proposition
```
What Makes Pratejra Different:

✅ FREE for Community Organizations (no cost barriers)
✅ 72-Hour Rapid Response (emergency protection within 3 days)
✅ Ethical AI Guardians (privacy-first, mission-aligned technology)
✅ Community-First Security (built by activists, for activists)
✅ Cultural Competency (understands community work constraints)
✅ No Surveillance (protection without monitoring or data collection)
```

### Target Audience Segmentation
```
PRIMARY AUDIENCES:
• Non-profit organizations ($0-5M budget)
• Grassroots activist networks
• Indigenous rights groups
• Environmental protection orgs
• Faith-based community centers
• Cultural preservation societies
• Workers rights collectives
• LGBTQ+ support organizations
• Immigrant rights groups
• Youth empowerment programs
```

### Product Ecosystem

**A. Public Landing Experience**
- Hero section with community-focused messaging
- "Why Choose Us" differentiators section
- Allies Playbook (Protect, Amplify, Preserve pillars)
- Social proof and trust indicators
- Yellow particle background shader

**B. Protected Organization Portal**
- Community Protection Dashboard
- Security status monitoring
- Emergency contact system
- Community network features
- Threat intelligence reports

**C. Core Security Services**
- Website security monitoring
- Email protection and PGP encryption
- Social media account protection
- Digital asset preservation
- Incident response coordination
- Security training resources

### Technical Architecture

**Frontend Stack:**
- Next.js 15 (App Router)
- TypeScript (strict mode)
- Tailwind CSS with custom community color palette
- WebGL shader backgrounds
- Responsive design system

**Backend & Security:**
- Prisma ORM with PostgreSQL
- JWT-based authentication
- PGP encryption for messaging
- Rate limiting and DDoS protection
- Audit logging system

**Security Features:**
- Domain-based access control
- Role-based permissions (USER, AGENT, ADMIN)
- Session management with refresh tokens
- Email authorization for trusted organizations
- Encrypted data storage

### Business Model & Sustainability

**Revenue Strategy:**
- Premium services for larger organizations
- Enterprise partnerships and sponsorships
- Grant funding and philanthropic support
- Training and consulting services
- Technology partnerships

**Sustainability Approach:**
- Core community protection remains free
- Transparent funding model
- Ethical technology partnerships
- Community governance participation

### Brand Identity & Visual Design

**Color Palette:**
- Community (Teal): Trust, growth, healing `#14b8a6`
- Hope (Amber): Warmth, community, optimism `#f59e0b`
- Wisdom (Purple): Spirituality, protection, ethics `#a855f7`
- Guardian (Slate): Professional, secure, trustworthy `#1e293b`

**Typography & Visual Elements:**
- Inter font family for readability
- Yellow particle shader background
- Shield and guardian iconography
- Community-focused illustrations
- Trust indicators and social proof

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

## Security Guidelines
- **Authentication**: JWT-based with refresh tokens, email authorization
- **Authorization**: Role-based access control (USER, AGENT, ADMIN)
- **Data Protection**: PGP encryption for sensitive communications
- **Audit Logging**: All security operations logged for compliance
- **Rate Limiting**: DDoS protection and abuse prevention
- **Input Validation**: Sanitize all user inputs, prevent injection attacks
- **Session Security**: HTTP-only cookies, secure session management
- **Domain Control**: Whitelist-based domain access restrictions

## Community-First Development
- **Accessibility**: WCAG 2.1 AA compliance for all users
- **Inclusive Design**: Consider diverse user needs and constraints
- **Ethical AI**: No surveillance, privacy-first approach
- **Cultural Sensitivity**: Respect diverse community contexts
- **Free Access**: Core features remain free for community orgs
- **Transparent Communication**: Clear about limitations and capabilities
- **Community Governance**: Involve protected communities in decisions
- **Impact Measurement**: Track and report community protection impact

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

## Development Workflow
1. **Read**: Understand project structure and existing patterns
2. **Plan**: Design minimal, non-destructive changes
3. **Implement**: Apply changes following established patterns
4. **Test**: Verify functionality and run all checks
5. **Document**: Update this guide as patterns evolve

## Quality Assurance
- **Build Verification**: `bun run verify` before any deployment
- **Security Review**: Manual security review for auth-related changes
- **Performance**: Monitor bundle size and runtime performance
- **Accessibility**: Test with screen readers and keyboard navigation
- **Cross-browser**: Verify functionality in supported browsers
- **Mobile-first**: Ensure responsive design on all devices

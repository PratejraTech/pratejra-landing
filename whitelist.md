# whitelist.md

## Purpose
Some integrations (auth providers, analytics SDKs, third-party APIs) require a list of trusted domains to prevent unapproved origins from calling your backend. This guide explains how to configure, relax, and re-tighten those checks across local development, Cloudflare Pages/Workers, and external dashboards.

## Recommended Host List
1. Production custom domains (e.g., `example.com`, `www.example.com`).
2. Staging or preview domains (e.g., `staging.example.com`, `your-project.pages.dev`).
3. Local development origins (`http://localhost:3000`, `http://127.0.0.1:3000`).

Keep the list explicit. Cloudflare currently disallows wildcard entries such as `*.pages.dev`, so you must enumerate each hostname that needs access.

## Next.js Middleware / API Routes
Implement a host check once near the edge (middleware) or inside the shared API handler. Example:

```ts
const allowedHosts = (process.env.ALLOWED_HOSTS ?? '')
  .split(',')
  .map((host) => host.trim())
  .filter(Boolean);

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') ?? '';
  if (!allowedHosts.includes(host)) {
    return NextResponse.json({ error: 'Domain not authorized' }, { status: 403 });
  }
  return NextResponse.next();
}
```

Store the comma-separated hostnames in `.env` (`ALLOWED_HOSTS=example.com,www.example.com`). Restart the dev server when the list changes.

## Temporary “Allow All” Mode
For quick debugging, you can bypass the check:

```ts
const isAllowed = process.env.ALLOW_ALL_HOSTS === 'true' || allowedHosts.includes(host);
```

When `ALLOW_ALL_HOSTS=true`, every request passes. **Only enable this flag locally or in short-lived debug deployments**, and revert to the strict list after verification.

## Cloudflare Workers and Pages
- Workers: Inspect the `request.headers.get('host')` inside the `fetch` handler. Apply the same allowed-host check before invoking downstream logic.
- Pages Functions: Add the guard in the function entry point; Cloudflare will route each request through it.
- Provider dashboards (Auth0, Clerk, Supabase, etc.) require the same explicit domain list. Add each environment separately and include `http://localhost:3000` for local testing.

## Troubleshooting
- “Domain not authorized” on localhost → ensure `localhost` (with port) is in both env vars and provider dashboards.
- Preview deploy blocked → add the unique preview hostname (e.g., `feature-123.pages.dev`) temporarily or use a wildcard-friendly proxy that forwards only known hosts.
- After editing `.env`, restart `npm run dev` so Next.js picks up the new host list.

# Cloudflare Pages Deployment Guide

## Overview

This guide provides instructions for deploying the Pratejra landing page to Cloudflare Pages using Wrangler CLI.

## Prerequisites

1. **Cloudflare Account**: Sign up at [cloudflare.com](https://cloudflare.com)
2. **Wrangler CLI**: Install globally
   ```bash
   bun add -g wrangler
   wrangler auth login
   ```

3. **Cloudflare Pages Project**: Create a new Pages project in the Cloudflare dashboard

## Configuration Files

The following files have been configured for Cloudflare Pages deployment:

### wrangler.toml
```toml
name = "pratejra-landing"
compatibility_date = "2024-01-01"
pages_build_output_dir = "build"

[env.production]
routes = [
  { pattern = "/functions/analytics/*", zone_name = "pratejra.build" }
]

[vars]
NODE_VERSION = "18"

[[pages_build_config]]
   build_command = "bun run build"
destination_dir = "build"
root_dir = "."
```

### next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  images: {
    domains: ['localhost'],
  },
  experimental: {
    optimizeCss: false, // Disabled to avoid critters dependency issues
  },
}

module.exports = nextConfig
```

### package.json Scripts
```json
{
  "scripts": {
    "build:pages": "next build",
    "deploy": "wrangler pages deploy build",
    "deploy:preview": "wrangler pages deploy build --branch $(git branch --show-current)",
    "cf:dev": "wrangler pages dev build"
  }
}
```

## Functions

### Analytics Function
- **Location**: `functions/analytics/allies-visit.js`
- **Purpose**: Handles analytics tracking for ally visits
- **Endpoint**: `/functions/analytics/allies-visit`

## Security Headers

### _headers (public/_headers)
```
*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin

/static/*
  Cache-Control: public, max-age=31536000, immutable

*.js
  Cache-Control: public, max-age=31536000

*.css
  Cache-Control: public, max-age=31536000

*.woff2
  Cache-Control: public, max-age=31536000
```

## Environment Variables

Set these in Cloudflare Pages dashboard or via Wrangler:

- `NODE_ENV`: production
- `NEXT_PUBLIC_APP_URL`: https://your-domain.pages.dev

## Deployment Steps

### 1. Local Testing
   ```bash
   # Test build locally
   bun run build:pages

   # Test with Wrangler dev server
   bun run cf:dev
   ```

### 2. Deploy to Production
   ```bash
   # Deploy to production
   bun run deploy
   ```

### 3. Deploy to Preview (Branch)
   ```bash
   # Deploy to preview environment
   bun run deploy:preview
   ```

## CI/CD Pipeline

### GitHub Actions (.github/workflows/deploy.yml)
```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v4

     - name: Setup Bun
       uses: oven-sh/setup-bun@v1
       with:
         bun-version: latest

     - name: Install dependencies
       run: bun install

     - name: Build
       run: bun run build:pages

    - name: Deploy to Cloudflare Pages
      uses: cloudflare/pages-action@v1
      with:
        apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
        accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
        projectName: pratejra-landing
        directory: build
        gitHubToken: ${{ secrets.GITHUB_TOKEN }}
```

## Required Secrets (GitHub)

Add these to your GitHub repository secrets:
- `CLOUDFLARE_API_TOKEN`: API token with Pages permissions
- `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

## Custom Domain Setup

1. **Add Custom Domain** in Cloudflare Pages dashboard
2. **Update DNS**: Point your domain to Cloudflare
3. **SSL Certificate**: Automatically provisioned by Cloudflare

## Monitoring & Analytics

### Cloudflare Analytics
- Real User Monitoring (RUM)
- Web Analytics
- Security Events
- Performance metrics

### Custom Analytics
The application includes analytics tracking via the `/functions/analytics/allies-visit` endpoint.

## Troubleshooting

### Build Issues
   - Ensure all dependencies are installed: `bun install`
- Check Node.js version compatibility (18+)
- Verify environment variables are set

### Function Issues
- Check function logs: `wrangler tail`
- Verify function routes in `wrangler.toml`

### Performance Issues
- Enable Cloudflare caching for static assets
- Use WebP images with fallbacks
- Monitor bundle size

## Cost Optimization

- **Free Tier**: 100 GB bandwidth, 500 builds/month
- **Caching**: Leverage Cloudflare's global CDN
- **Image Optimization**: Use Cloudflare Images if needed

## Rollback Strategy

```bash
# List deployments
wrangler pages deployment list

# Rollback to previous deployment
wrangler pages deployment rollback <deployment-id>
```

## Success Metrics

- [ ] Build completes successfully
- [ ] Pages load within 3 seconds
- [ ] Analytics functions work
- [ ] All external links functional
- [ ] Mobile responsiveness maintained
- [ ] SSL certificate active
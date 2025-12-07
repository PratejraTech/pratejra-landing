# 🚀 Deployment Guide

This guide covers deploying the Pratejra Landing application to various platforms.

## 📋 Prerequisites

- Node.js 18+ or Bun
- Git repository
- Environment variables configured

## 🔧 Environment Setup

1. Copy the environment template:
   ```bash
   cp .env.example .env.local
   ```

2. Configure your environment variables in `.env.local`:
   ```env
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
   # ... other variables
   ```

## 🌐 Deployment Options

### Option 1: Cloudflare Pages (Recommended)

#### Automatic Deployment
1. Connect your GitHub repository to Cloudflare Pages
2. Configure build settings:
   - **Build command**: `bun run build`
   - **Build output directory**: `build`
   - **Root directory**: `/`
3. Add environment variables in Cloudflare Pages dashboard
4. Deploy automatically on git push

#### Manual Deployment
```bash
# Install dependencies
bun install

# Build for production
bun run build

# Deploy to Cloudflare Pages
bun run deploy
```

### Option 2: Vercel

#### Automatic Deployment
1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect Next.js and configure settings
3. Add environment variables in Vercel dashboard
4. Deploy automatically on git push

#### Manual Deployment
```bash
# Install Vercel CLI
bun add -g vercel

# Deploy
bun run deploy:vercel
```

### Option 3: Netlify

#### Automatic Deployment
1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - **Build command**: `bun run build`
   - **Publish directory**: `build`
3. Add environment variables in Netlify dashboard
4. Deploy automatically on git push

#### Manual Deployment
```bash
# Install Netlify CLI
bun add -g netlify-cli

# Deploy
bun run deploy:netlify
```

### Option 4: Docker

#### Build and Run Locally
```bash
# Build Docker image
bun run docker:build

# Run container
bun run docker:run

# Or build and run in one command
bun run docker:build:run
```

#### Deploy to Docker Registry
```bash
# Tag and push to registry
docker tag pratejra-landing your-registry/pratejra-landing:latest
docker push your-registry/pratejra-landing:latest
```

## 🔍 Health Checks

After deployment, verify your application is running:

### Health Endpoint
```bash
curl https://your-domain.com/api/health
```

Expected response:
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 123.456,
  "version": "1.0.0",
  "environment": "production",
  "memory": {
    "rss": 123456789,
    "heapTotal": 123456789,
    "heapUsed": 123456789,
    "external": 123456789
  }
}
```

### Manual Checks
- [ ] Homepage loads correctly
- [ ] Navigation works
- [ ] All pages render properly
- [ ] Contact form submits
- [ ] Analytics tracking works
- [ ] SEO metadata is present

## 📊 Performance Monitoring

### Bundle Analysis
```bash
bun run build:analyze
```
This generates a bundle analysis report in `build/analyze/`

### Lighthouse Audit
Run Lighthouse on your deployed URL to check performance metrics.

## 🔒 Security Considerations

### Environment Variables
- Never commit `.env.local` to version control
- Use different values for staging/production
- Rotate secrets regularly

### HTTPS
- All deployments should use HTTPS
- Configure HSTS headers (already included)
- Use security headers (already configured)

### Monitoring
- Set up error tracking (Sentry, LogRocket, etc.)
- Monitor performance metrics
- Configure uptime monitoring

## 🚀 Post-Deployment Tasks

### 1. DNS Configuration
- Point your domain to the deployment platform
- Configure SSL certificates
- Set up custom domain if needed

### 2. Analytics Setup
- Configure Google Analytics or similar
- Set up conversion tracking
- Enable error reporting

### 3. SEO Verification
- Submit sitemap to Google Search Console
- Verify robots.txt is accessible
- Check structured data with Google's Rich Results Test

### 4. Performance Optimization
- Enable CDN caching
- Configure image optimization
- Set up monitoring alerts

## 🐛 Troubleshooting

### Build Failures
```bash
# Clear cache and rebuild
bun run clean
bun install
bun run build
```

### Runtime Issues
- Check application logs in deployment platform
- Verify environment variables are set correctly
- Test API endpoints manually

### Performance Issues
- Run bundle analyzer: `bun run build:analyze`
- Check Lighthouse scores
- Monitor Core Web Vitals

## 📞 Support

For deployment issues:
1. Check the health endpoint: `/api/health`
2. Review deployment logs
3. Verify environment configuration
4. Test locally: `bun run dev`

## 🔄 Updates and Maintenance

### Zero-downtime Deployments
- All platforms support zero-downtime deployments
- ISR ensures content updates without rebuilds
- API routes handle dynamic content

### Rollbacks
- Most platforms support instant rollbacks
- Keep deployment history for quick recovery
- Test thoroughly before production releases

---

**Deployment Status**: ✅ Production Ready
**Supported Platforms**: Cloudflare Pages, Vercel, Netlify, Docker
**Build Time**: ~3-5 seconds
**Bundle Size**: 149kB (optimized)
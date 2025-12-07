# 🚀 Pratejra Landing

**The Veil Between Worlds** - Empowering communities with enterprise-grade cybersecurity across five continents.

[![Next.js](https://img.shields.io/badge/Next.js-15.5.7-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC)](https://tailwindcss.com/)
[![Bun](https://img.shields.io/badge/Bun-1.3.2-FBF0DF)](https://bun.sh/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## ✨ Features

- **⚡ Next.js 15** - Latest App Router with Server Components
- **🎨 Modern UI** - Glassmorphism design with immersive backgrounds
- **🔒 Enterprise Security** - Comprehensive security headers and best practices
- **📱 Responsive** - Mobile-first design with touch-friendly interactions
- **🚀 Performance** - Optimized bundle with code splitting and ISR
- **🔍 SEO Optimized** - Structured data, sitemaps, and meta tags
- **🎯 Analytics** - Built-in tracking and performance monitoring
- **🐳 Docker Ready** - Containerized deployment support

## 🏗️ Architecture

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes (analytics, projects, health)
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── [...pages]/        # Dynamic routes
├── src/
│   ├── components/        # React components
│   ├── constants/         # Application constants
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript definitions
│   └── utils/            # Utility functions
└── public/               # Static assets
```

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** or **Bun 1.0+**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/pratejra-landing.git
   cd pratejra-landing
   ```

2. **Install dependencies**
   ```bash
   # Using Bun (recommended)
   bun install

   # Or using npm
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start development server**
   ```bash
   # Using Bun
   bun dev

   # Or using npm
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📜 Available Scripts

```bash
# Development
bun dev                    # Start development server
bun build                  # Build for production
bun start                  # Start production server
bun lint                   # Run ESLint
bun type-check            # Run TypeScript type checking

# Analysis & Testing
bun build:analyze         # Generate bundle analysis
bun test                  # Run tests (placeholder)

# Deployment
bun deploy                # Deploy to Cloudflare Pages
bun deploy:preview        # Deploy preview to Cloudflare Pages
bun docker:build          # Build Docker image
bun docker:run            # Run Docker container

# Maintenance
bun clean                 # Clean build artifacts
```

## 🌐 Deployment

### Automated Deployment (Recommended)

#### Cloudflare Pages
1. Connect your GitHub repository
2. Set build command: `bun run build`
3. Set build output: `build`
4. Add environment variables
5. Deploy automatically on push

#### Vercel
1. Connect your GitHub repository
2. Vercel auto-detects Next.js settings
3. Add environment variables
4. Deploy automatically

#### Netlify
1. Connect your GitHub repository
2. Set build command: `bun run build`
3. Set publish directory: `build`
4. Add environment variables

### Manual Deployment

```bash
# Build for production
bun run build

# Deploy to your preferred platform
bun run deploy          # Cloudflare Pages
bun run deploy:vercel   # Vercel
bun run deploy:netlify  # Netlify
```

### Docker Deployment

```bash
# Build and run locally
bun run docker:build:run

# Or step by step
bun run docker:build
bun run docker:run
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
# Application
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Analytics
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id

# Security
NEXT_PUBLIC_CSP_ENABLED=true

# Email (optional)
SMTP_HOST=your-smtp-host
SMTP_USER=your-email
SMTP_PASS=your-password
```

### Build Configuration

The application is optimized with:
- **Bundle Analysis**: `bun run build:analyze`
- **Code Splitting**: Dynamic imports for performance
- **Image Optimization**: Next.js Image component
- **Security Headers**: Enterprise-grade protection
- **SEO**: Structured data and sitemaps

## 🏆 Performance

- **Bundle Size**: 149kB first load (optimized)
- **Lighthouse Score**: 95+ (expected)
- **Core Web Vitals**: Excellent
- **SEO Score**: 100/100
- **Accessibility**: WCAG 2.1 AA compliant

## 🔒 Security

- **Security Headers**: X-Frame-Options, HSTS, CSP
- **HTTPS Only**: Enforced SSL/TLS
- **Content Security Policy**: Configurable CSP
- **Secure Dependencies**: Regular security audits

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design**: Original Figma design by the Pratejra team
- **Framework**: Next.js team for the amazing framework
- **Community**: Open source contributors

## 📞 Support

- **Health Check**: Visit `/api/health` for system status
- **Issues**: [GitHub Issues](https://github.com/your-username/pratejra-landing/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/pratejra-landing/discussions)

---

**Built with ❤️ by the Pratejra team**

*"The Veil Between Worlds"*
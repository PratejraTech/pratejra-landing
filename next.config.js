/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build', // Output to build directory for Cloudflare Pages
  images: {
    domains: ['localhost'],
  },
  // Disable CSS optimization to avoid critters issue
  experimental: {
    optimizeCss: false,
  },
}

module.exports = nextConfig
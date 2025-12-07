import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { Toaster } from '@/components/ui/sonner'
import RootLayout from '@/components/layout/RootLayout'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Pratejra/Shaivra - The Veil Between Worlds',
    template: '%s | Pratejra/Shaivra'
  },
  description: 'Empowering communities with enterprise-grade cybersecurity across five continents. Advanced threat mitigation, AI-driven responses, and multilingual AI models for global operations.',
  keywords: ['cybersecurity', 'AI', 'threat mitigation', 'enterprise security', 'global operations', 'multilingual AI'],
  authors: [{ name: 'Pratejra Team' }],
  creator: 'Pratejra',
  publisher: 'Pratejra',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pratejra.build'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pratejra.build',
    title: 'Pratejra/Shaivra - The Veil Between Worlds',
    description: 'Empowering communities with enterprise-grade cybersecurity across five continents.',
    siteName: 'Pratejra',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pratejra/Shaivra - Cybersecurity Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pratejra/Shaivra - The Veil Between Worlds',
    description: 'Empowering communities with enterprise-grade cybersecurity across five continents.',
    images: ['/og-image.jpg'],
    creator: '@pratejra',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${jetbrainsMono.className}`}>
        <StructuredData type="organization" />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <RootLayout>
            {children}
          </RootLayout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
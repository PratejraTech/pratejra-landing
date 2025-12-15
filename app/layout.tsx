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
    default: 'Pratejra - Guardians of the Veil',
    template: '%s | Pratejra'
  },
  description: 'Elite cybersecurity protectors serving communities, activists, and cultural stewards. AI-enhanced guardians deploying quantum security, discreet operations, and benevolent technology for those who protect others.',
  keywords: ['cybersecurity', 'community protection', 'activist security', 'non-profit defense', 'cultural preservation', 'benevolent AI', 'quantum security', 'digital guardians'],
  authors: [{ name: 'Pratejra Core Team' }],
  creator: 'Pratejra',
  publisher: 'Pratejra',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pratejratech.build'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pratejratech.build',
    title: 'Pratejra - Guardians of the Veil',
    description: 'Elite cybersecurity protectors serving communities, activists, and cultural stewards with AI-enhanced security and benevolent technology.',
    siteName: 'Pratejra',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pratejra - Elite Cybersecurity Guardians',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pratejra - Guardians of the Veil',
    description: 'Elite cybersecurity protectors serving communities, activists, and cultural stewards with AI-enhanced security and benevolent technology.',
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
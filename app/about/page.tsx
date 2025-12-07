import About from '@/pages/About'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Pratejra\'s philosophy and mission in cybersecurity innovation.',
  openGraph: {
    title: 'About Pratejra',
    description: 'Learn about Pratejra\'s philosophy and mission in cybersecurity innovation.',
  },
}

export default function AboutPage() {
  return <About />
}

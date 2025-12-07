import { ContactSection } from '@/components/sections/ContactSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Pratejra. Send a secure message about your cybersecurity needs.',
  openGraph: {
    title: 'Contact Pratejra',
    description: 'Get in touch with Pratejra. Send a secure message about your cybersecurity needs.',
  },
}

export default function ContactPage() {
  return <ContactSection />
}

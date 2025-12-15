import React from 'react';
import { PhilosophySection } from '@/components/sections/PhilosophySection';
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
  return (
    <div className="min-h-screen py-20">
      <PhilosophySection />
    </div>
  );
}

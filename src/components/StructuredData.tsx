interface StructuredDataProps {
  type?: 'website' | 'organization' | 'article'
  data?: Record<string, any>
}

export default function StructuredData({ type = 'website', data }: StructuredDataProps) {
  const baseData: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': type === 'website' ? 'WebSite' : type === 'organization' ? 'Organization' : 'Article',
    name: 'Pratejra/Shaivra',
    description: 'Empowering communities with enterprise-grade cybersecurity across five continents. Advanced threat mitigation, AI-driven responses, and multilingual AI models for global operations.',
    url: 'https://pratejra.build',
    logo: 'https://pratejra.build/logo.png',
    sameAs: [
      'https://github.com/pratejra',
      // Add other social media profiles here
    ],
    ...data,
  }

  if (type === 'organization') {
    baseData.foundingDate = '2024'
    baseData.founder = {
      '@type': 'Person',
      name: 'Pratejra Team',
    }
    baseData.contactPoint = {
      '@type': 'ContactPoint',
      email: 'core@pratejra.build',
      contactType: 'customer service',
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(baseData),
      }}
    />
  )
}
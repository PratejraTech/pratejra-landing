interface StructuredDataProps {
  type?: 'website' | 'organization' | 'article'
  data?: Record<string, any>
}

export default function StructuredData({ type = 'website', data }: StructuredDataProps) {
  const baseData: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': type === 'website' ? 'WebSite' : type === 'organization' ? 'Organization' : 'Article',
    name: 'Pratejra',
    description: 'Elite cybersecurity protectors serving communities, activists, and cultural stewards. AI-enhanced guardians deploying quantum security, discreet operations, and benevolent technology for those who protect others.',
    url: 'https://pratejratech.build',
    logo: 'https://pratejratech.build/logo.png',
    sameAs: [
      'https://github.com/pratejratech',
      // Add other social media profiles here
    ],
    ...data,
  }

  if (type === 'organization') {
    baseData.foundingDate = '2024'
    baseData.founder = {
      '@type': 'Organization',
      name: 'Pratejra Core Team',
    }
    baseData.contactPoint = {
      '@type': 'ContactPoint',
      email: 'core@pratejra.build',
      contactType: 'customer service',
      availableLanguage: ['English'],
    }
    baseData.areaServed = 'Worldwide'
    baseData.serviceType = 'Cybersecurity, Digital Protection, AI Security'
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
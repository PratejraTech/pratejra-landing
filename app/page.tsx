import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';

// Dynamically import sections below the fold for better code splitting
const ImpactPulse = dynamic(() => import('@/components/sections/ImpactPulse'), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20 rounded-lg" />
});

const ComponentOrderSection = dynamic(() => import('@/components/sections/ComponentOrderSection'), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20 rounded-lg" />
});

const AlliesPlaybook = dynamic(() => import('@/components/sections/AlliesPlaybook'), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20 rounded-lg" />
});

// Revalidate every 24 hours
export const revalidate = 86400

export default function Page() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ImpactPulse />
      <ComponentOrderSection />
      <AlliesPlaybook />
    </div>
  );
}
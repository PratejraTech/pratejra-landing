import dynamic from 'next/dynamic';
import HeroPanel from '@/components/sections/HeroPanel';

// Dynamically import sections below the fold for better code splitting
const CommunityValue = dynamic(() => import('@/components/sections/CommunityValue'), {
  loading: () => <div className="h-96 animate-pulse bg-guardian-900/50 rounded-lg" />
});

const ImpactPulse = dynamic(() => import('@/components/sections/ImpactPulse'), {
  loading: () => <div className="h-96 animate-pulse bg-guardian-900/50 rounded-lg" />
});

const AlliesPlaybook = dynamic(() => import('@/components/sections/AlliesPlaybook'), {
  loading: () => <div className="h-96 animate-pulse bg-guardian-900/50 rounded-lg" />
});

// Revalidate every 24 hours
export const revalidate = 86400

export default function Page() {
  return (
    <div className="min-h-screen">
      <HeroPanel />
      <CommunityValue />
      <ImpactPulse />
      <AlliesPlaybook />
    </div>
  );
}
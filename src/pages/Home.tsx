import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ImpactPulse from '../components/sections/ImpactPulse';
import ComponentOrderSection from '../components/sections/ComponentOrderSection';
import AlliesPlaybook from '../components/sections/AlliesPlaybook';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ImpactPulse />
      <ComponentOrderSection />
      <AlliesPlaybook />
    </div>
  );
};

export default Home;
import React from 'react';
import { OptimizedImage } from '../../ui/optimized-image';

const HeroLogo: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="relative">
        {/* Mystical Background Effects */}
        <div className="absolute inset-0 rounded-full opacity-50">
          <div className="w-full h-full rounded-full border-2 border-dashed border-wisdom-400/70 animate-pulse"></div>
          <div className="absolute inset-2 rounded-full border border-dashed border-wisdom-300/50 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute inset-4 rounded-full border border-dashed border-community-400/40 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Logo Container */}
        <div className="relative bg-gradient-to-br from-guardian-900 to-wisdom-900/50 rounded-full p-6 shadow-2xl border border-wisdom-700/50 ring-2 ring-wisdom-500/30">
          <OptimizedImage
            src="/media/logo.png"
            alt="Pratejra Logo"
            width={140}
            height={140}
            className="object-contain rounded-full drop-shadow-lg"
            priority={true}
          />
        </div>

        {/* Energy Ring */}
        <div className="absolute inset-0 rounded-full border border-wisdom-400/40 animate-ping" style={{animationDuration: '3s'}}></div>
      </div>
    </div>
  );
};

export default HeroLogo;
import React from 'react';

const HeroSystemStatus: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-4 py-6 px-8 bg-guardian-900/20 rounded-full border border-wisdom-500/20 backdrop-blur-sm">
      <div className="w-4 h-4 bg-wisdom-500 rounded-full animate-pulse shadow-sm shadow-wisdom-500/50"></div>
      <span className="text-wisdom-400 font-medium text-lg tracking-wide">System Active</span>
    </div>
  );
};

export default HeroSystemStatus;
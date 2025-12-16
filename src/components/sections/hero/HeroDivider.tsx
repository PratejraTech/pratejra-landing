import React from 'react';

const HeroDivider: React.FC = () => {
  return (
    <div className="py-12">
      <div className="w-40 h-px bg-gradient-to-r from-transparent via-wisdom-400/60 to-transparent mx-auto mb-6"></div>
      <div className="flex justify-center gap-4">
        <div className="w-2 h-2 bg-wisdom-400 rounded-full animate-pulse mx-1" style={{animationDelay: '0s'}}></div>
        <div className="w-2 h-2 bg-community-400 rounded-full animate-pulse mx-1" style={{animationDelay: '0.5s'}}></div>
        <div className="w-2 h-2 bg-hope-400 rounded-full animate-pulse mx-1" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
};

export default HeroDivider;
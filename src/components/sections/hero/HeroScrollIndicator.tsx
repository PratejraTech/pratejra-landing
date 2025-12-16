import React from 'react';

const HeroScrollIndicator: React.FC = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-guardian-400 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-wisdom-400 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  );
};

export default HeroScrollIndicator;
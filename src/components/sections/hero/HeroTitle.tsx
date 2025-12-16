import React from 'react';

const HeroTitle: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-wisdom-300 via-wisdom-200 to-community-300 bg-clip-text text-transparent leading-none drop-shadow-sm">
        Pratejra/Shaivra
      </h1>
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-guardian-100 font-light tracking-widest">
        The Veil Between Worlds
      </h2>
    </div>
  );
};

export default HeroTitle;
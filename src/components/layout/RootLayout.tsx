import React from 'react';
import ImmersiveBackground from '../ui/ImmersiveBackground';
import Header from './Header';
import Footer from './Footer';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative">
      {/* Immersive Background - Fixed, full viewport */}
      <ImmersiveBackground />

      {/* Ambient Overlay for readability */}
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />

      {/* Content Layer */}
      <div className="relative z-10">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
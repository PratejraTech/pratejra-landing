import React from 'react';
import ImmersiveBackground from '../ui/ImmersiveBackground';
import Header from './Header';
import Footer from './Footer';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.03),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.02),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(16,185,129,0.02),transparent_50%)] pointer-events-none" />

      {/* Immersive Background - Fixed, full viewport */}
      <ImmersiveBackground />

      {/* Ambient Overlay for readability with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/70 to-slate-950/80 backdrop-blur-[1px]" />

      {/* Content Layer */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
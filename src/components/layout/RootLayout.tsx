import React from 'react';
import { WebGLShader } from '../ui/web-gl-shader';
import Header from './Header';
import Footer from './Footer';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* WebGL Shader Background - Fixed, full viewport */}
      <WebGLShader />

       {/* Ambient Overlay for readability with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-900/50 to-slate-950/60 dark:bg-gradient-to-b dark:from-slate-950/40 dark:via-slate-900/50 dark:to-slate-950/60 bg-gradient-to-b from-gray-100/40 via-gray-200/50 to-gray-100/60 backdrop-blur-[0.5px]" />

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
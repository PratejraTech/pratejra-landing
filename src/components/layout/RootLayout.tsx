import React from 'react';
import { WebGLShader } from '../ui/web-gl-shader';
import { ScrollProgress } from '../ui/ScrollProgress';
import { ErrorBoundary } from '../ui/ErrorBoundary';
import Header from './Header';
import Footer from './Footer';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen relative overflow-hidden">
        <ScrollProgress />
        {/* WebGL Shader Background - Yellow particle system with low alpha */}
        <div className="fixed inset-0 z-0">
          <WebGLShader />
        </div>

        {/* Ambient Overlay for readability with gradient - adjusted for yellow background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/70 to-slate-950/80 backdrop-blur-[0.5px] z-5" />

        {/* Content Layer */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default RootLayout;
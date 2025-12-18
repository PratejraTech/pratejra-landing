import React from 'react';
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
      <div className="min-h-screen bg-[#030307] text-white">
        <ScrollProgress />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 bg-[#030307]">{children}</main>
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default RootLayout;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Ghost, Sword, Scale, Eye, Zap } from 'lucide-react';

// Add Google Fonts link for serif
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Crimson+Text:ital@1&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

// Add Google Fonts link for serif typography
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Crimson+Text:ital@1&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

function App() {
  const [view, setView] = useState('light'); // 'light' or 'shadow'
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleViewChange = (newView) => {
    if (newView !== view) {
      setIsTransitioning(true);
      setTimeout(() => {
        setView(newView);
        setIsTransitioning(false);
      }, 300); // Match transition duration
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-mono">
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50 transition-colors hover:bg-blue-700"
      >
        Skip to main content
      </a>
      {/* Header */}
      <header className="border-b-2 border-neutral-800 p-6 shadow-lg shadow-neutral-900/50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-wider text-blue-200/90">PRATEJRA / SHAIVRA</h1>
            <p className="text-sm text-neutral-400 mt-1">The Veil Between Worlds</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-sm shadow-blue-500/50"></div>
            <span className="text-sm text-blue-200/80">Active</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b-2 border-neutral-800 p-6 shadow-inner shadow-neutral-900/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight text-blue-100/95 hover:text-blue-50 transition-colors duration-300">
            From stillness, Pratejra strikes.<br />
            From silence, Shaivra shapes with no shape.
          </h2>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto hover:text-neutral-300 transition-colors duration-300">
            We Work While Doing the Work. We Ask For Little For We Have All We Need.
          </p>
        </div>
      </section>

      {/* View Toggle */}
      <section className="border-b-2 border-neutral-800 p-6 shadow-md shadow-neutral-900/40">
        <div className="max-w-6xl mx-auto flex justify-center space-x-4">
          <button
            onClick={() => handleViewChange('light')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleViewChange('light'); } }}
            className={`px-6 py-2 border-2 rounded transition-all duration-300 hover:transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
              view === 'light'
                ? 'border-blue-300 bg-blue-300 text-neutral-950 shadow-lg shadow-blue-500/30'
                : 'border-blue-600/50 hover:border-blue-400 hover:shadow-md hover:shadow-blue-500/20'
            }`}
            aria-pressed={view === 'light'}
            aria-label="Switch to Pratejra Light view"
          >
            The Light (Pratejra)
          </button>
          <button
            onClick={() => handleViewChange('shadow')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleViewChange('shadow'); } }}
            className={`px-6 py-2 border-2 rounded transition-all duration-300 hover:transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
              view === 'shadow'
                ? 'border-blue-300 bg-blue-300 text-neutral-950 shadow-lg shadow-blue-500/30'
                : 'border-blue-600/50 hover:border-blue-400 hover:shadow-md hover:shadow-blue-500/20'
            }`}
            aria-pressed={view === 'shadow'}
            aria-label="Switch to Shaivra Shadow view"
          >
            The Shadow (Shaivra)
          </button>
        </div>
      </section>

      {/* Grid Content */}
      <main id="main-content" className="p-6">
        <div className={`max-w-6xl mx-auto space-y-8 transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>

          {/* Concept Box */}
          <div className="border-2 border-neutral-700 p-6 hover:border-blue-500/60 transition-all duration-300 shadow-lg shadow-neutral-900/50 hover:shadow-xl hover:shadow-blue-900/20 hover:transform hover:-translate-y-1">
            <div className="flex items-center space-x-3 mb-4">
              <Ghost className="w-8 h-8 text-blue-400/80" />
              <h3 className="text-2xl font-bold text-blue-200/90">Benevolent Ghosts</h3>
            </div>
            <p className="text-neutral-300 leading-relaxed hover:text-neutral-200 transition-colors">
              Silent protectors... unbound spirit guided by ancient wisdom. Financial gain takes a back seat to the mission. We operate as ghosts—unseen, unfettered, yet ever-present in the shadows of need.
            </p>
          </div>

          {/* Mission Table */}
          {(view === 'light' || view === 'shadow') && (
            <div className="border-2 border-neutral-700 p-6 hover:border-blue-500/60 transition-all duration-300 shadow-lg shadow-neutral-900/50 hover:shadow-xl hover:shadow-blue-900/20 hover:transform hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-8 h-8 text-blue-400/80" />
                <h3 className="text-2xl font-bold text-blue-200/90">Mission Objectives</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-full" role="table" aria-label="Mission objectives data table">
                <caption className="sr-only">Detailed breakdown of mission objectives</caption>
                <thead>
                  <tr className="border-b border-neutral-600">
                    <th scope="col" className="text-left p-3 font-bold text-blue-200/80">Objective</th>
                    <th scope="col" className="text-left p-3 font-bold text-blue-200/80">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-700 hover:bg-blue-950/20 transition-colors">
                    <td className="p-3 font-mono text-blue-300/90">Humanitarian Protection</td>
                    <td className="p-3 text-neutral-300 hover:text-neutral-200">Safeguarding vulnerable communities from exploitation and harm.</td>
                  </tr>
                  <tr className="border-b border-neutral-700 hover:bg-blue-950/20 transition-colors">
                    <td className="p-3 font-mono text-blue-300/90">Preservation of Heritage</td>
                    <td className="p-3 text-neutral-300 hover:text-neutral-200">Protecting cultural and historical artifacts from destruction or theft.</td>
                  </tr>
                  <tr className="border-b border-neutral-700 hover:bg-blue-950/20 transition-colors">
                    <td className="p-3 font-mono text-blue-300/90">Countering Exploitation</td>
                    <td className="p-3 text-neutral-300 hover:text-neutral-200">Disrupting networks that profit from human suffering.</td>
                  </tr>
                  <tr className="hover:bg-blue-950/20 transition-colors">
                    <td className="p-3 font-mono text-blue-300/90">Empowering the Aligned</td>
                    <td className="p-3 text-neutral-300 hover:text-neutral-200">Equipping mission-aligned groups with tools and knowledge.</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
          )}

          {/* Values Data-Set */}
          <AnimatePresence mode="wait">
            {view === 'light' && (
              <motion.div
                key="light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="border-2 border-neutral-700 p-6 hover:border-blue-500/60 transition-all duration-300 shadow-lg shadow-neutral-900/50 hover:shadow-xl hover:shadow-blue-900/20 hover:transform hover:-translate-y-1"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Scale className="w-8 h-8 text-blue-400/80" />
                  <h3 className="text-2xl font-bold text-blue-200/90">Code of Conduct</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="border border-neutral-600 p-4 hover:bg-blue-950/30 transition-all duration-300 hover:border-blue-400/50 hover:transform hover:scale-105 shadow-md shadow-neutral-900/30 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <div className="font-mono text-sm text-blue-300/70 mb-2">Benevolence</div>
                    <div className="text-neutral-300 hover:text-neutral-200">Compassion drives action, not profit.</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="border border-neutral-600 p-4 hover:bg-blue-950/30 transition-all duration-300 hover:border-blue-400/50 hover:transform hover:scale-105 shadow-md shadow-neutral-900/30 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <div className="font-mono text-sm text-blue-300/70 mb-2">Precision</div>
                    <div className="text-neutral-300 hover:text-neutral-200">Every strike is calculated, every word measured.</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="border border-neutral-600 p-4 hover:bg-blue-950/30 transition-all duration-300 hover:border-blue-400/50 hover:transform hover:scale-105 shadow-md shadow-neutral-900/30 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <div className="font-mono text-sm text-blue-300/70 mb-2">Secrecy</div>
                    <div className="text-neutral-300 hover:text-neutral-200">Operations remain veiled, identities protected.</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="border border-neutral-600 p-4 hover:bg-blue-950/30 transition-all duration-300 hover:border-blue-400/50 hover:transform hover:scale-105 shadow-md shadow-neutral-900/30 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <div className="font-mono text-sm text-blue-300/70 mb-2">Security</div>
                    <div className="text-neutral-300 hover:text-neutral-200">Data and lives are fortified against threats.</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="border border-neutral-600 p-4 hover:bg-blue-950/30 transition-all duration-300 hover:border-blue-400/50 hover:transform hover:scale-105 shadow-md shadow-neutral-900/30 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <div className="font-mono text-sm text-blue-300/70 mb-2">Wisdom</div>
                    <div className="text-neutral-300 hover:text-neutral-200">Ancient insights guide modern tactics.</div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Operational Alignment */}
          <AnimatePresence mode="wait">
            {view === 'shadow' && (
              <motion.div
                key="shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="border-2 border-neutral-700 p-6 hover:border-blue-500/60 transition-all duration-300 shadow-lg shadow-neutral-900/50 hover:shadow-xl hover:shadow-blue-900/20 hover:transform hover:-translate-y-1"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Sword className="w-8 h-8 text-blue-400/80" />
                  <h3 className="text-2xl font-bold text-blue-200/90">Operational Principles</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="border border-neutral-600 p-4 hover:bg-blue-950/30 transition-all duration-300 hover:border-blue-400/50 hover:transform hover:scale-105 shadow-md shadow-neutral-900/30 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <Eye className="w-5 h-5 text-blue-400/70" />
                      <div className="font-mono text-sm text-blue-300/70">Circle of Protection</div>
                    </div>
                    <div className="text-neutral-300 text-sm hover:text-neutral-200">
                      We encircle the vulnerable, creating barriers of silence and strength.
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="border border-neutral-600 p-4 hover:bg-blue-950/30 transition-all duration-300 hover:border-blue-400/50 hover:transform hover:scale-105 shadow-md shadow-neutral-900/30 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <Ghost className="w-5 h-5 text-blue-400/70" />
                      <div className="font-mono text-sm text-blue-300/70">Ghost Step</div>
                    </div>
                    <div className="text-neutral-300 text-sm hover:text-neutral-200">
                      Movement unseen, presence unfelt, yet impact undeniable.
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="border border-neutral-600 p-4 hover:bg-blue-950/30 transition-all duration-300 hover:border-blue-400/50 hover:transform hover:scale-105 shadow-md shadow-neutral-900/30 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <Zap className="w-5 h-5 text-blue-400/70" />
                      <div className="font-mono text-sm text-blue-300/70">Mirror of Truth</div>
                    </div>
                    <div className="text-neutral-300 text-sm hover:text-neutral-200">
                      Reflecting reality without distortion, cutting through illusion.
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </main>

      {/* Footer/Signature */}
      <footer className="border-t-2 border-neutral-800 p-6 mt-12 shadow-inner shadow-neutral-900/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-serif italic mb-4 text-blue-200/80 hover:text-blue-100 transition-colors">
            "Shaantāt hanti, maunāt srujati. Shaivraḥ."
          </p>
          <p className="text-sm text-neutral-400 hover:text-neutral-300 transition-colors">
            v1.0.0 Authored by Sunyata, August 2025
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
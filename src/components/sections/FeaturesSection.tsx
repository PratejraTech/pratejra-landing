import React from 'react';
import { Shield, Eye, Sword, Scale } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Benevolent Ghosts',
    description: 'Silent protectors, bound by a code of wisdom, compassion, discretion, and precision. They do not act for profit or political gain.',
  },
  {
    icon: Eye,
    title: 'Circle of Protection',
    description: 'Any mission must begin with an assessment of how it shields, preserves, or uplifts vulnerable communities.',
  },
  {
    icon: Sword,
    title: 'Ghost Step',
    description: 'Operations leave no unnecessary trace, ensuring discretion and safety for all involved in the mission.',
  },
  {
    icon: Scale,
    title: 'Mirror of Truth',
    description: 'Internal review and ethical vetting precede every action, ensuring alignment with our benevolent mandate.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Operational Principles
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            These principles anchor every decision. If an idea doesn't nourish people, stories, or helpers, it waits.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const colors = [
              { bg: 'from-blue-500/20 to-blue-600/20', hover: 'hover:border-blue-400/50 hover:shadow-blue-500/20', icon: 'text-blue-400', title: 'group-hover:text-blue-300' },
              { bg: 'from-violet-500/20 to-violet-600/20', hover: 'hover:border-violet-400/50 hover:shadow-violet-500/20', icon: 'text-violet-400', title: 'group-hover:text-violet-300' },
              { bg: 'from-emerald-500/20 to-emerald-600/20', hover: 'hover:border-emerald-400/50 hover:shadow-emerald-500/20', icon: 'text-emerald-400', title: 'group-hover:text-emerald-300' },
              { bg: 'from-cyan-500/20 to-cyan-600/20', hover: 'hover:border-cyan-400/50 hover:shadow-cyan-500/20', icon: 'text-cyan-400', title: 'group-hover:text-cyan-300' }
            ];
            const colorScheme = colors[index % colors.length];
            return (
              <div
                key={index}
                className={`group bg-gradient-to-br ${colorScheme.bg} backdrop-blur-sm rounded-xl p-6 border border-slate-700 ${colorScheme.hover} transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:-translate-y-2`}
              >
                <div className={`w-12 h-12 bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className={`w-6 h-6 ${colorScheme.icon}`} />
                </div>
                <h3 className={`text-xl font-semibold text-white mb-3 ${colorScheme.title} transition-colors`}>
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-slate-800/70 via-slate-700/50 to-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 max-w-4xl mx-auto shadow-xl shadow-slate-900/20">
            <div className="relative">
              <Shield className="w-16 h-16 text-transparent bg-gradient-to-br from-blue-400 via-violet-400 to-emerald-400 bg-clip-text mx-auto mb-6" />
              <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 via-violet-400/20 to-emerald-400/20 rounded-full blur-xl mx-auto"></div>
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-slate-300 italic mb-6 font-serif">
              "Through the unseen, we protect the sacred."
            </p>
            <p className="text-slate-300 leading-relaxed text-lg">
              Shaivra's mission is to act as a force multiplier for aligned organizations, communities, and individuals who serve the greater good. We provide tools, tactics and techniques that vulnerable people & their organizations are unable to access.
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
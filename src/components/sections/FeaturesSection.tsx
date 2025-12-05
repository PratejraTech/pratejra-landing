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
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors">
                <feature.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 max-w-4xl mx-auto">
            <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-xl text-slate-300 italic mb-6">
              "Through the unseen, we protect the sacred."
            </p>
            <p className="text-slate-300 leading-relaxed">
              Shaivra's mission is to act as a force multiplier for aligned organizations, communities, and individuals who serve the greater good. We provide tools, tactics and techniques that vulnerable people & their organizations are unable to access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
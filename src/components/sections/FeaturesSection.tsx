import React from 'react';
import { Shield, Eye, Sword, Scale } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Benevolent Ghosts',
    description: 'Silent protectors operating in the shadows, guided by ancient wisdom and modern intelligence.',
  },
  {
    icon: Eye,
    title: 'Circle of Protection',
    description: 'We encircle the vulnerable, creating barriers of silence and strength against exploitation.',
  },
  {
    icon: Sword,
    title: 'Ghost Step',
    description: 'Movement unseen, presence unfelt, yet impact undeniable in the digital veil.',
  },
  {
    icon: Scale,
    title: 'Mirror of Truth',
    description: 'Reflecting reality without distortion, cutting through illusion with precision.',
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

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">47</div>
            <div className="text-slate-300">Communities Supported</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">120+</div>
            <div className="text-slate-300">Rapid Missions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">18</div>
            <div className="text-slate-300">Languages Covered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">320TB</div>
            <div className="text-slate-300">Stories Preserved</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
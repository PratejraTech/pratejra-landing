import React from 'react';
import { Shield, Database, Users, Globe } from 'lucide-react';

const objectives = [
  {
    icon: Shield,
    title: 'Humanitarian Protection',
    description: 'Shielding communities from harm, both physical and digital.',
  },
  {
    icon: Database,
    title: 'Preservation of Heritage',
    description: 'Protecting cultural, historical, and environmental treasures.',
  },
  {
    icon: Users,
    title: 'Countering Exploitation',
    description: 'Identifying and disrupting systems of corruption and exploitation.',
  },
  {
    icon: Globe,
    title: 'Empowering the Aligned',
    description: 'Providing capabilities to organizations who act for benevolent causes.',
  },
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <section className="text-center">
          <div className="bg-slate-900/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Objectives
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              We strive to enable aligned organizations to operate with precision and ethics.
            </p>
          </div>
        </section>

        <section>
          <div className="bg-slate-900/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {objectives.map((objective, index) => (
                <div
                  key={index}
                  className="bg-slate-800/60 backdrop-blur-md rounded-xl p-6 border border-slate-600/30 shadow-lg"
                >
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                    <objective.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {objective.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {objective.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
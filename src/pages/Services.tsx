import React from 'react';
import { Shield, Database, Users, Globe, Lock, Zap } from 'lucide-react';

const objectives = [
  {
    icon: Shield,
    title: 'Humanitarian Protection',
    description: 'Shielding communities from harm, both physical and digital. Safeguarding vulnerable people including children, families.',
    features: ['Risk Assessment', 'Community Defense', 'Crisis Response', 'Long-term Security'],
  },
  {
    icon: Database,
    title: 'Preservation of Heritage',
    description: 'Protecting cultural, historical, and environmental treasures from destruction or theft.',
    features: ['Digital Archiving', 'Cultural Documentation', 'Secure Storage', 'Access Management'],
  },
  {
    icon: Users,
    title: 'Countering Exploitation',
    description: 'Identifying and disrupting systems of corruption, oppression, and exploitation.',
    features: ['Network Analysis', 'Pattern Recognition', 'Strategic Disruption', 'Ethical Intervention'],
  },
  {
    icon: Globe,
    title: 'Empowering the Aligned',
    description: 'Providing operational and business capabilities to organizations who act for benevolent causes.',
    features: ['Capacity Building', 'Technology Transfer', 'Training Programs', 'Ongoing Support'],
  },
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Objectives
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            We strive to enable aligned organizations to operate with the precision of elite intelligence operations,
            tempered with the ethics of the monastic vow.
          </p>
          <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 border border-slate-700 max-w-2xl mx-auto">
            <p className="text-slate-300 italic">
              "We provide tools, tactics and techniques that vulnerable people & their organizations are unable to access"
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <objective.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {objective.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  {objective.description}
                </p>
                <ul className="space-y-2">
                  {objective.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-400">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Tools */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Technology & Tools
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Shaivra employs a layered technology ecosystem to enhance capability without compromising mission ethics.
            </p>
          </div>

          <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center">Operational Security Layer</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Lock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Encryption</h4>
                <p className="text-slate-300 text-sm">Zero trust architecture and sovereign hosting solutions</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Secure Communications</h4>
                <p className="text-slate-300 text-sm">Protected channels for mission-critical information</p>
              </div>
              <div className="text-center">
                <Eye className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Ethical AI</h4>
                <p className="text-slate-300 text-sm">AI-powered intelligence tempered with monastic ethics</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
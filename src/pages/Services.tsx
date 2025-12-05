import React from 'react';
import { Shield, Database, Users, Globe, Lock, Zap } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Humanitarian Protection',
    description: 'Safeguarding vulnerable communities from exploitation and harm through silent, effective interventions.',
    features: ['Risk Assessment', 'Community Defense', 'Crisis Response', 'Long-term Security'],
  },
  {
    icon: Database,
    title: 'Heritage Preservation',
    description: 'Protecting cultural and historical artifacts from destruction or theft with advanced digital repositories.',
    features: ['Digital Archiving', 'Cultural Documentation', 'Secure Storage', 'Access Management'],
  },
  {
    icon: Users,
    title: 'Community Empowerment',
    description: 'Equipping mission-aligned groups with tools and knowledge to sustain their own operations.',
    features: ['Capacity Building', 'Technology Transfer', 'Training Programs', 'Ongoing Support'],
  },
  {
    icon: Globe,
    title: 'Global Intelligence',
    description: 'Monitoring and countering networks that profit from human suffering across international borders.',
    features: ['Network Analysis', 'Pattern Recognition', 'Strategic Disruption', 'Information Sharing'],
  },
  {
    icon: Lock,
    title: 'Digital Security',
    description: 'Fortifying data and communication channels against modern threats and surveillance.',
    features: ['Encryption Solutions', 'Secure Communications', 'Privacy Protection', 'Threat Mitigation'],
  },
  {
    icon: Zap,
    title: 'Rapid Response',
    description: 'Swift, precise interventions when communities face immediate threats or crises.',
    features: ['Emergency Assessment', 'Immediate Action', 'Resource Deployment', 'Follow-up Support'],
  },
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Purpose-built solutions that operate in the shadows, serving communities,
            preserving heritage, and countering exploitation with unwavering commitment.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
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

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Every engagement follows these principles, ensuring natural, effective outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Listen Deeply</h3>
              <p className="text-slate-300">
                We start with one gentle call to learn who you serve and where the tensions live.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Build Together</h3>
              <p className="text-slate-300">
                We co-design tools and playbooks side-by-side so they feel like home to your team.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Leave Empowered</h3>
              <p className="text-slate-300">
                We depart after documenting, training, and ensuring friendly humans stay on call.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
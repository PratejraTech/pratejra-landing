"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Users, Zap, Lock, Globe } from "lucide-react";

const differentiators = [
  {
    icon: Heart,
    title: "Mission-Aligned, Not Profit-Driven",
    description: "Unlike commercial security firms, our incentives align perfectly with yours. We protect communities because it's the right thing to do.",
    color: "community",
  },
  {
    icon: Shield,
    title: "Built for Non-Technical Teams",
    description: "Security tools designed by activists, for activists. No jargon, no complexity—just effective protection that your team can actually use.",
    color: "hope",
  },
  {
    icon: Users,
    title: "Community-First Response",
    description: "When you call, you speak to people who understand community work, not just cybersecurity. We get your constraints and context.",
    color: "wisdom",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Most security assessments take weeks. We can have basic protections in place within 72 hours of your request.",
    color: "community",
  },
  {
    icon: Lock,
    title: "Privacy by Design",
    description: "We don't collect data about you or your work. Our systems are designed to protect your privacy as much as your security.",
    color: "hope",
  },
  {
    icon: Globe,
    title: "Global but Local",
    description: "International expertise with deep understanding of local contexts. We work with communities worldwide while respecting cultural nuances.",
    color: "wisdom",
  },
];

export function CommunityValue() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-guardian-950 to-guardian-900">
      <div className="max-w-7xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-community-400/80 mb-3">why choose pratejra</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Security That Understands Your Mission
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We're not just another cybersecurity company. We're community protectors who happen to be experts in digital security.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            const colorMap = {
              community: { icon: 'text-community-400', border: 'border-community-500/30', bg: 'bg-community-500/10', hover: 'hover:border-community-400/50' },
              hope: { icon: 'text-hope-400', border: 'border-hope-500/30', bg: 'bg-hope-500/10', hover: 'hover:border-hope-400/50' },
              wisdom: { icon: 'text-wisdom-400', border: 'border-wisdom-500/30', bg: 'bg-wisdom-500/10', hover: 'hover:border-wisdom-400/50' },
            };
            const colors = colorMap[item.color as keyof typeof colorMap];

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 rounded-2xl border ${colors.border} ${colors.bg} backdrop-blur-sm hover:${colors.hover} transition-all duration-300`}
              >
                <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center mb-4 ${colors.icon}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </motion.article>
            );
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-community-600/20 to-hope-600/20 rounded-3xl p-8 border border-community-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Protect Your Community?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Join the growing network of community organizations that trust Pratejra with their digital security.
              Our protection is completely free for worthy causes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/allies'}
                className="px-8 py-3 bg-gradient-to-r from-community-600 to-community-500 hover:from-community-500 hover:to-community-400 text-white rounded-xl font-medium transition-all duration-300 shadow-lg shadow-community-500/25"
              >
                Get Free Protection
              </button>
              <button
                onClick={() => window.location.href = '/contact'}
                className="px-8 py-3 bg-guardian-800/80 hover:bg-guardian-700/80 border border-guardian-600 text-slate-300 hover:text-white rounded-xl font-medium transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CommunityValue;
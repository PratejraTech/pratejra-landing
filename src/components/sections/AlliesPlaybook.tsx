"use client";

import { motion } from "framer-motion";
import { Shield, Radio, FolderLock } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Protect & Defend",
    description: "Immediate security response when threats emerge. We handle the technical complexity so you can focus on your mission.",
    bullets: ["72-hour threat assessment", "Secure communication channels", "Emergency response coordination"],
    color: "community",
    free: true,
  },
  {
    icon: Radio,
    title: "Amplify Your Voice",
    description: "Strategic communication support to counter disinformation and amplify your community's story.",
    bullets: ["Fact-checking assistance", "Social media protection", "Community storytelling tools"],
    color: "hope",
    free: true,
  },
  {
    icon: FolderLock,
    title: "Preserve Your Work",
    description: "Safeguard your digital archives, donor data, and institutional knowledge from loss or compromise.",
    bullets: ["Encrypted data backup", "Digital preservation planning", "Recovery support"],
    color: "wisdom",
    free: true,
  },
];

export function AlliesPlaybook() {
  return (
    <span className="component-highlight component-container" data-component="allies-playbook">
      <section id="allies-playbook" className="modern-section layered-background relative px-4 sm:px-6 lg:px-8" aria-label="Allies playbook">
        <div className="max-w-7xl mx-auto relative">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-community-500/20 text-community-300 px-3 py-1 rounded-full text-xs font-medium mb-4">
            <span className="w-2 h-2 bg-community-400 rounded-full animate-pulse"></span>
            FREE FOR COMMUNITY ORGANIZATIONS
          </div>
          <p className="text-xs uppercase tracking-[0.4em] text-community-400/80 mb-3">allies playbook</p>
          <h3 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-white via-community-200 to-white bg-clip-text text-transparent">
            Protection Designed for Communities
          </h3>
          <p className="mt-4 text-sm md:text-base text-slate-400 max-w-3xl mx-auto">
            We exist because community organizations shouldn't have to choose between security and their mission.
            Our protection is free for non-profits, activists, and cultural stewards.
          </p>
        </motion.header>

        <div className="asymmetric-grid asymmetric-grid-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const colorMap = {
              community: { border: 'border-community-500/30', bg: 'bg-community-500/20', text: 'text-community-100', accent: 'bg-community-300', hover: 'hover:border-community-400' },
              hope: { border: 'border-hope-500/30', bg: 'bg-hope-500/20', text: 'text-hope-100', accent: 'bg-hope-300', hover: 'hover:border-hope-400' },
              wisdom: { border: 'border-wisdom-500/30', bg: 'bg-wisdom-500/20', text: 'text-wisdom-100', accent: 'bg-wisdom-300', hover: 'hover:border-wisdom-400' },
            };
            const colors = colorMap[pillar.color as keyof typeof colorMap];

            return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-3xl border ${colors.border} bg-guardian-900/60 backdrop-blur-md p-6 flex flex-col gap-4 shadow-2xl hover:${colors.hover} transition-all duration-300 relative overflow-hidden`}
              >
                {/* Free badge */}
                <div className="absolute top-4 right-4 bg-community-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                  FREE
                </div>

                <div className={`w-12 h-12 rounded-2xl border ${colors.border} ${colors.bg} flex items-center justify-center ${colors.text}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{pillar.title}</h3>
                  <p className="text-sm text-slate-400 mt-2">{pillar.description}</p>
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.accent} mt-2`} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <p className="text-xs uppercase tracking-[0.3em] text-community-400/80 font-medium">
                    Response within 72h · 100% discreet
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
    </span>
  );
}

export default AlliesPlaybook;

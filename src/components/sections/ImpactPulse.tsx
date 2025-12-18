"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const highlights = [
  "Discovery Flow: interviews, telemetry, and cultural briefings surface the pinch points before a line of code is touched.",
  "Application Flow: co-design sessions translate needs into lightweight guardianship agreements, safety rails, and rapid response windows.",
  "Information Flow: bilingual briefs, NDAs, and zero-trace reporting keep communities updated without exposing what must stay quiet.",
];

export const ImpactPulse = () => {
  return (
    <section className="relative overflow-hidden bg-[#030307] px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-[#04030b] via-[#030307] to-[#030307]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-hope-300">
              Digital Risk Assessment
            </p>
            <h3 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Discovery → Application → Information, Held in One Calm Pulse
            </h3>
            <p className="text-lg text-white/70">
              Every mission begins with curiosity and care. We map your operations, prioritize the guardianship gaps, then translate that into actionable intelligence so your team can keep showing up without fearing the next ping.
            </p>
            <ul className="space-y-3 text-white/70">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-hope-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.4)]">
              <Image
                src="/design/section-03.png"
                alt="Digital risk assessment and threat protection dashboard"
                width={1920}
                height={1080}
                className="rounded-[24px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactPulse;

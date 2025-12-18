"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function CommunityValue() {
  return (
    <section className="relative overflow-hidden bg-[#05050f] px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#140d2b]/60 to-[#05050f]" />
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-community-500/30 blur-[180px]" />
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold uppercase tracking-[0.4em] text-community-300"
        >
          Community-First Security
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
        >
          AI-Augmented Protection Built Specifically for Nonprofits and Activists
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-lg text-white/70"
        >
          We understand your constraints and speak your language. Pratejra deploys ethical AI guardians, quantum-secure encryption, and autonomous response systems to protect communities doing vital work. Operations remain transparent, non-commercial, and aligned with human rights principles.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-3 shadow-[0_40px_120px_rgba(0,0,0,0.35)]"
        >
          <Image
            src="/design/section-02.png"
            alt="AI-powered community protection systems"
            width={1920}
            height={1080}
            className="rounded-[28px]"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default CommunityValue;

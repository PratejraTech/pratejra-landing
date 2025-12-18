"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Heart, Globe } from "lucide-react";

export function AlliesPlaybook() {
  return (
    <section className="relative overflow-hidden bg-[#040308] px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-[#05040f] via-transparent to-[#05040f]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-wisdom-500/20 to-transparent opacity-40" />
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold uppercase tracking-[0.4em] text-wisdom-300"
        >
          Allies of the Veil
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl"
        >
          Free Guardian Ops for People Who Keep Others Safe
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-lg text-white/70"
        >
          Pratejra backs the people who protect others. Whether you&apos;re defending human rights, preserving culture, providing healthcare, or fighting for justice—if your mission serves humanity, we stand with you. Our discovery → application → information handshake is lightweight, encrypted, and tuned to the cadence of grassroots work.
        </motion.p>

        {/* Three pillars */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-guardian-900/60 to-guardian-800/40 backdrop-blur-md rounded-2xl p-6 border border-community-500/30"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-community-500 to-community-400 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">For NGOs</h4>
            <p className="text-sm text-white/70">Free enterprise-grade protection for registered nonprofits serving vulnerable communities.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-guardian-900/60 to-guardian-800/40 backdrop-blur-md rounded-2xl p-6 border border-hope-500/30"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-hope-500 to-hope-400 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">For Activists</h4>
            <p className="text-sm text-white/70">Protecting truth-tellers, whistleblowers, and those standing up for what's right.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-guardian-900/60 to-guardian-800/40 backdrop-blur-md rounded-2xl p-6 border border-wisdom-500/30"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-wisdom-500 to-wisdom-400 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Global Reach</h4>
            <p className="text-sm text-white/70">Operating across 5 continents with support in 18 languages for maximum accessibility.</p>
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-8 text-sm text-white/60 max-w-3xl mx-auto"
        >
          Start with a quiet note describing what you&apos;re caring for, who must stay safe, and what success looks like. We respond with secure intake links, mutual NDAs if needed, and a plan that keeps ownership with your team.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12"
        >
          <button className="rounded-full bg-gradient-to-r from-wisdom-600 to-wisdom-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-wisdom-500/40 transition hover:translate-y-[-2px] hover:from-wisdom-500 hover:to-wisdom-400">
            Initiate Contact →
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mx-auto mt-16 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.35)]"
        >
          <Image
            src="/design/section-04.png"
            alt="Global network of protected communities"
            width={1920}
            height={1080}
            className="rounded-[24px]"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default AlliesPlaybook;

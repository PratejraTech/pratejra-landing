"use client";

import Image from "next/image";
import { Shield } from "lucide-react";

const HeroPanel = () => {

  return (
    <section className="relative overflow-hidden bg-[#040308] text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-[#090113] via-[#040308] to-[#040308] opacity-80" />
      <div className="absolute -top-40 right-0 w-[480px] h-[480px] bg-wisdom-500/30 blur-[180px]" />
      <div className="relative z-10 mx-auto flex min-h-screen flex-col px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        <main className="mx-auto mt-16 flex w-full max-w-4xl flex-1 flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              {/* Dotted Shader Background */}
              <div className="absolute inset-0 rounded-full opacity-30">
                <div className="w-full h-full rounded-full border-2 border-dashed border-community-400/50 animate-pulse"></div>
                <div className="absolute inset-2 rounded-full border border-dashed border-community-400/30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute inset-4 rounded-full border border-dashed border-wisdom-400/20 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>

              {/* Black Circular Frame */}
              <div className="relative bg-black rounded-full p-3 shadow-2xl border border-white/10">
                <Image
                  src="/media/logo.png"
                  alt="Pratejra Logo"
                  width={100}
                  height={100}
                  className="object-contain rounded-full"
                  priority={true}
                />
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-community-500/20 bg-community-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-community-300">
            The Veil Between Worlds
          </div>
          <h1 className="mt-8 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Cyber Guardianship for Communities, Activists, and Cultural Stewards
          </h1>
          <p className="mt-6 text-lg text-white/70">
            <span className="text-community-400 font-semibold">Free protection for worthy causes.</span> We shield nonprofits, medics, archivists, and whistleblowers with enterprise-grade defense that prefers compassion over clout. Our covenant blends AI guardians, quantum-safe encryption, and calm humans who understand that your work is sacred.
          </p>
          <p className="mt-4 text-base text-white/60 max-w-3xl">
            Every engagement follows a gentle cadence: <span className="text-community-200">Listen &amp; Orient</span>, <span className="text-hope-200">Co-Design the Plan</span>, <span className="text-wisdom-200">Build Quietly</span>, and <span className="text-white">Support &amp; Teach</span>. Documentation, multilingual comms, and cultural context are baked in so your team stays steady even after we hand it back.
          </p>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-community-500 rounded-full animate-pulse"></div>
              <span>72-hour rapid response window</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-hope-500 rounded-full animate-pulse"></div>
              <span>18 languages &amp; dialects supported</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-wisdom-500 rounded-full animate-pulse"></div>
              <span>Ethical AI, zero surveillance</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-community-600 to-community-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-community-500/40 transition hover:translate-y-[-2px] hover:from-community-500 hover:to-community-400">
              <Shield className="h-4 w-4" />
              Request Protection
            </button>
            <button className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white hover:text-white">
              Learn Our Mission
            </button>
          </div>

          {/* Social Proof Stats */}
          <div className="mt-12 flex justify-center items-center gap-8 opacity-70">
            <div className="text-community-400 text-center">
              <div className="text-2xl font-bold">47</div>
              <div className="text-xs text-white/50">Communities Protected</div>
            </div>
            <div className="text-hope-400 text-center">
              <div className="text-2xl font-bold">120+</div>
              <div className="text-xs text-white/50">Threats Neutralized</div>
            </div>
            <div className="text-wisdom-400 text-center">
              <div className="text-2xl font-bold">5</div>
              <div className="text-xs text-white/50">Continents</div>
            </div>
          </div>
        </main>

        <div className="mx-auto mt-16 w-full max-w-5xl">
          <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
            <div className="absolute inset-x-6 top-6 z-10 h-10 rounded-2xl bg-gradient-to-r from-wisdom-500/40 to-transparent blur-3xl" />
            <Image
              src="/design/section-01.png"
              alt="Pratejra community protection platform"
              width={1920}
              height={1080}
              priority
              className="rounded-[24px] border border-white/15 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPanel;

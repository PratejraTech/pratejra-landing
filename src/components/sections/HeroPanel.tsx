"use client";

import Image from "next/image";
import { Apple } from "lucide-react";

const HeroPanel = () => {

  return (
    <section className="relative overflow-hidden bg-[#040308] text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-[#090113] via-[#040308] to-[#040308] opacity-80" />
      <div className="absolute -top-40 right-0 w-[480px] h-[480px] bg-[#a855f7]/30 blur-[180px]" />
      <div className="relative z-10 mx-auto flex min-h-screen flex-col px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        <main className="mx-auto mt-16 flex w-full max-w-4xl flex-1 flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
            New: Rapid response desk
          </div>
          <h1 className="mt-8 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Agentic community security from prototype to protection
          </h1>
          <p className="mt-6 text-lg text-white/70">
            Pratejra brings structure to agentic cybersecurity workflows so
            grassroots teams can harden infrastructure, ship faster, and respond
            to incidents in hours—not weeks.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#9b5cff] to-[#c084fc] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#9b5cff]/40 transition hover:translate-y-[-2px]">
              <Apple className="h-4 w-4" />
              Download for macOS
            </button>
            <button className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white hover:text-white">
              Watch Demo
            </button>
          </div>
        </main>

        <div className="mx-auto mt-16 w-full max-w-5xl">
          <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
            <div className="absolute inset-x-6 top-6 z-10 h-10 rounded-2xl bg-gradient-to-r from-[#4c1d95]/40 to-transparent blur-3xl" />
            <Image
              src="/design/section-01.png"
              alt="Pratejra hero interface preview"
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

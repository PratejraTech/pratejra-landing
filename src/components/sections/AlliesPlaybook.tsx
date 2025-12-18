"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Copy } from "lucide-react";

const installCommand = "curl -fsSL https://cli.pratejra.org/install | bash";

export function AlliesPlaybook() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(installCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy command", error);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#040308] px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-[#05040f] via-transparent to-[#05040f]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent opacity-40" />
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
          terminal-native agent ops
        </p>
        <h3 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">
          Conversation to code to deployment, directly from the terminal
        </h3>
        <p className="mt-6 text-lg text-white/70">
          Access Pratejra agents from your secure terminal. Build features,
          automate workflows, analyze incidents, and land fixes locally or over
          SSH—in a loop that keeps you and your allies in flow.
        </p>
        <button className="mt-6 text-sm font-semibold text-white/70 transition hover:text-white">
          Learn more about CLI →
        </button>
        <p className="mt-8 text-sm uppercase tracking-[0.4em] text-white/50">
          Install on macOS or Linux
        </p>
        <div className="mx-auto mt-4 flex max-w-xl items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-left font-mono text-sm text-white/80 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <span className="truncate">{installCommand}</span>
          <button
            type="button"
            onClick={handleCopy}
            className="ml-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-white/40 hover:bg-white/20"
            aria-label="Copy install command"
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </div>
        <div className="mx-auto mt-16 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
          <Image
            src="/design/section-04.png"
            alt="Terminal-based deployment preview"
            width={1920}
            height={1080}
            className="rounded-[24px]"
          />
        </div>
      </div>
    </section>
  );
}

export default AlliesPlaybook;

'use client'

import { motion } from "framer-motion";
import { useEffect } from "react";
import { ANALYTICS_ENDPOINTS, EXTERNAL_URLS } from "../../constants";

/**
 * Call-to-action section specifically for non-profits, NGOs, and activist orgs
 */
export function AlliesCallToAction() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const payload = JSON.stringify({
      event: "allies_visit",
      timestamp: new Date().toISOString(),
      path: window.location.pathname + window.location.hash,
    });

    if (navigator.sendBeacon) {
      const blob = new Blob([payload], { type: "application/json" });
      navigator.sendBeacon(ANALYTICS_ENDPOINTS.ALLIES_VISIT, blob);
    } else {
      fetch(ANALYTICS_ENDPOINTS.ALLIES_VISIT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
        keepalive: true,
      }).catch(() => {
        // Swallow network errors; analytics is best-effort.
      });
    }
  }, []);
  const partnerProfiles = [
    {
      title: "Non-Profits & NGOs",
      description: "Teams running clinics, schools, or relief work that need a calm digital partner."
    },
    {
      title: "Activist Networks",
      description: "Coalitions navigating pressure or disinformation who want steady reinforcement."
    },
    {
      title: "Faith & Cultural Stewards",
      description: "Caretakers preserving sacred spaces, oral histories, or family records."
    }
  ];

  const supportChannels = [
    {
      title: "Operational Shielding",
      description: "Simple threat models, secure channels, and rapid help without extra noise."
    },
    {
      title: "Signal Amplification",
      description: "Research briefs, myth-busting kits, and heartfelt storytelling that center your community."
    },
    {
      title: "Caretaker Technology",
      description: "Lightweight tools, portals, and data rooms focused on consent, privacy, and multilingual access."
    }
  ];

  const engagementSteps = [
    "Share what you're caring for and the immediate pinch points.",
    "Let us know who must stay safe, unseen, or anonymous.",
    "Tell us how fast you need help and what success feels like for your people."
  ];

  return (
    <span className="component-highlight component-container" data-component="allies-call-to-action">
      <section id="allies" className="modern-section layered-background relative min-h-screen px-4 sm:px-6 lg:px-8 pt-32 pb-24" aria-label="Call to action for non-profits, NGOs, and activists">
        <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 mb-12 items-center">
          <div className="col-span-12 md:col-span-2">
            <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-emerald-500/50" />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="col-span-12 md:col-span-8 text-3xl md:text-5xl font-bold text-center text-foreground"
          >
            Allies, let's connect
          </motion.h1>
          <div className="col-span-12 md:col-span-2">
            <div className="h-px bg-gradient-to-l from-transparent via-emerald-500/50 to-emerald-500/50" />
          </div>
        </div>

        <div className="space-y-12 text-foreground leading-relaxed">
          {/* Intro */}
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="border border-emerald-500/20 rounded-3xl p-6 bg-gradient-to-br from-foreground/5 to-transparent shadow-lg shadow-emerald-950/20"
          >
            <p className="text-base md:text-lg mb-4">
              Shaivra backs the people who look after others. If you steward a community, an ecosystem, or a movement,
              this note is for you. We offer steady teammates who care about outcomes, not spotlight.
            </p>
            <p className="text-sm text-muted-foreground">
              Your mission stays yours. We simply fortify it.
            </p>
          </motion.article>

          {/* Partner Profiles */}
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="border border-emerald-500/20 rounded-3xl p-6 bg-gradient-to-br from-foreground/5 via-transparent to-transparent"
          >
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-foreground via-emerald-300 to-foreground bg-clip-text text-transparent">
              Who we partner with
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {partnerProfiles.map((profile, idx) => (
                <motion.div
                  key={profile.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                  className="rounded-2xl border border-emerald-500/20 bg-background/30 p-4"
                >
                  <h3 className="text-lg font-medium mb-2">{profile.title}</h3>
                  <p className="text-sm text-muted-foreground">{profile.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.article>

          {/* Support Channels */}
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="border border-emerald-500/20 rounded-3xl p-6 bg-gradient-to-br from-foreground/5 via-transparent to-transparent"
          >
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-foreground via-teal-300 to-foreground bg-clip-text text-transparent">
              Ways we can plug in
            </h2>
            <div className="space-y-4">
              {supportChannels.map((channel, idx) => (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                  className="p-5 rounded-2xl border border-emerald-500/20 bg-background/30 hover:border-emerald-500/60 transition"
                >
                  <h3 className="text-lg font-medium mb-2">{channel.title}</h3>
                  <p className="text-sm text-muted-foreground">{channel.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.article>

          {/* Engagement */}
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="border border-emerald-500/20 rounded-3xl p-6 bg-gradient-to-br from-foreground/5 to-transparent shadow-lg shadow-emerald-950/20"
          >
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-foreground via-emerald-300 to-teal-200 bg-clip-text text-transparent">
              How to reach out
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Keep the first exchange gentle and simple:
            </p>
            <ul className="space-y-3">
              {engagementSteps.map((step, idx) => (
                <li key={step} className="flex gap-3 items-start">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-emerald-500/20 text-sm font-medium text-emerald-200">
                    {idx + 1}
                  </span>
                  <p className="text-sm">{step}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 italic text-sm text-muted-foreground">
              We will respond with a secure intake path, mutual NDAs where needed, and a plan aligned to the Circle of Protection.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-lime-500 text-sm font-medium tracking-wide uppercase text-emerald-950"
              >
                Initiate Contact
              </a>
              <a
                href={EXTERNAL_URLS.ALLIES_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-emerald-500/40 text-sm font-medium tracking-wide uppercase hover:border-emerald-500/70"
              >
                Dedicated Allies Form
              </a>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Confidentiality begins with your first note.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
    </span>
  );
}

export default AlliesCallToAction;

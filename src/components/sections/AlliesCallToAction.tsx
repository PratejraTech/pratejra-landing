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
      description: "Guardians of community health, education, or relief work seeking discreet digital partners."
    },
    {
      title: "Activist Networks",
      description: "Coalitions facing surveillance, intimidation, or information warfare who need quiet reinforcement."
    },
    {
      title: "Faith & Cultural Stewards",
      description: "Groups protecting sacred spaces, oral histories, or vulnerable families."
    }
  ];

  const supportChannels = [
    {
      title: "Operational Shielding",
      description: "Threat modeling, secure communications, and digital countermeasures delivered with a zero-noise footprint."
    },
    {
      title: "Signal Amplification",
      description: "Narrative design, research briefs, and targeted campaigns that meet oppressive systems with clarity."
    },
    {
      title: "Caretaker Technology",
      description: "Custom tools, portals, and data rooms that prioritize consent, privacy, and multilingual access."
    }
  ];

  const engagementSteps = [
    "Share the mission that needs cover, not the secrets that can wait.",
    "Define who must remain safe, unseen, or anonymous.",
    "Outline timelines, red lines, and what success restores for your community."
  ];

  return (
    <section id="allies" className="relative min-h-screen px-4 sm:px-6 lg:px-8 pt-32 pb-24 border-b border-border/50" aria-label="Call to action for non-profits, NGOs, and activists">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-violet-900/20 to-slate-950 pointer-events-none" aria-hidden="true" />
      <div className="max-w-5xl mx-auto relative border-x border-violet-500/20 px-6 sm:px-8 lg:px-12 py-12">
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 mb-12 items-center">
          <div className="col-span-12 md:col-span-2">
            <div className="h-px bg-gradient-to-r from-transparent via-violet-500/50 to-violet-500/50" />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="col-span-12 md:col-span-8 text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-foreground via-violet-400 via-cyan-300 to-foreground bg-clip-text text-transparent"
          >
            Guardians, Step Forward
          </motion.h1>
          <div className="col-span-12 md:col-span-2">
            <div className="h-px bg-gradient-to-l from-transparent via-violet-500/50 to-violet-500/50" />
          </div>
        </div>

        <div className="space-y-12 text-foreground leading-relaxed">
          {/* Intro */}
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="border-2 border-violet-500/20 rounded-2xl p-6 bg-gradient-to-br from-card to-violet-500/5 shadow-lg shadow-violet-500/10"
          >
            <p className="text-base md:text-lg mb-4">
              Shaivra works in defense of those who defend others. If you steward a community, an ecosystem, or a movement,
              this page is your invitation. We offer the precision, secrecy, and benevolence outlined in our philosophy —
              absent vanity, politics, or spectacle.
            </p>
            <p className="text-sm text-muted-foreground">
              We do not compete with your mission. We fortify it.
            </p>
          </motion.article>

          {/* Partner Profiles */}
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="border-2 border-violet-500/20 rounded-2xl p-6 bg-gradient-to-br from-card via-card to-violet-500/5"
          >
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-foreground via-violet-400 to-foreground bg-clip-text text-transparent">
              Who We Stand Beside
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {partnerProfiles.map((profile, idx) => (
                <motion.div
                  key={profile.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                  className="rounded-xl border border-violet-500/30 bg-gradient-to-b from-violet-500/10 via-transparent to-transparent p-4"
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
            className="border-2 border-violet-500/20 rounded-2xl p-6 bg-gradient-to-br from-card via-card to-violet-500/5"
          >
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-foreground via-indigo-400 to-foreground bg-clip-text text-transparent">
              How We Protect & Amplify
            </h2>
            <div className="space-y-4">
              {supportChannels.map((channel, idx) => (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                  className="p-5 rounded-xl border border-violet-500/30 bg-gradient-to-br from-violet-500/5 to-transparent hover:border-violet-500/60 transition"
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
            className="border-2 border-violet-500/20 rounded-2xl p-6 bg-gradient-to-br from-card to-violet-500/10 shadow-lg shadow-violet-500/10"
          >
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-foreground via-violet-400 to-cyan-300 bg-clip-text text-transparent">
              Preparing Your Call
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              When you reach out, keep the initial briefing simple and principle-driven:
            </p>
            <ul className="space-y-3">
              {engagementSteps.map((step, idx) => (
                <li key={step} className="flex gap-3 items-start">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-violet-500/20 text-sm font-medium text-violet-200">
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
                className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 text-sm font-medium tracking-wide uppercase"
              >
                Initiate Contact
              </a>
              <a
                href={EXTERNAL_URLS.ALLIES_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border-2 border-violet-500/40 text-sm font-medium tracking-wide uppercase hover:border-violet-500/70"
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
  );
}

export default AlliesCallToAction;

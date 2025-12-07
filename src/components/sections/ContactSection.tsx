'use client'

import { motion } from "framer-motion";
import { Mail, Github } from "lucide-react";
import { EXTERNAL_URLS } from "../../constants";

/**
 * Contact section component
 */
export function ContactSection() {
  return (
    <span className="component-highlight component-container" data-component="contact-section">
      <section id="contact" className="modern-section relative px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28" aria-label="Contact information">
        <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <header className="space-y-4">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">
              Get In Touch
            </h3>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready when you are. Send a short note with what you're caring for, and we'll reply with a secure intake and a friendly next step.
            </p>
          </header>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={EXTERNAL_URLS.EMAIL}
              className="inline-flex items-center space-x-3 border border-emerald-500/30 rounded-full px-6 py-3 bg-gradient-to-br from-foreground/5 via-transparent to-transparent hover:border-emerald-500/50 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Send email to core@pratejra.build"
            >
              <Mail className="w-4 h-4 text-emerald-200" />
              <span className="text-base">core@pratejra.build</span>
            </a>

            <a
              href={EXTERNAL_URLS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 border border-emerald-500/30 rounded-full px-6 py-3 bg-gradient-to-br from-foreground/5 via-transparent to-transparent hover:border-emerald-500/50 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Visit GitHub repository"
            >
              <Github className="w-4 h-4 text-emerald-200" />
              <span className="text-base">GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
    </span>
  );
}

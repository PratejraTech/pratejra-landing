import { motion } from "framer-motion";
import { Mail, Github } from "lucide-react";
import { EXTERNAL_URLS } from "../../constants";

/**
 * Contact section component
 */
export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-border/50" aria-label="Contact information">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.05] to-transparent pointer-events-none" aria-hidden="true" />
      <div className="max-w-4xl mx-auto text-center relative border-x border-emerald-500/20 px-6 sm:px-8 lg:px-12 py-12 rounded-[2.5rem] bg-background/30 backdrop-blur-sm">
        <div className="grid grid-cols-12 gap-4 mb-12 items-center">
          <div className="col-span-12 md:col-span-3">
            <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-emerald-500/50" />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="col-span-12 md:col-span-6 text-3xl md:text-4xl font-semibold text-foreground"
          >
            Contact
          </motion.h2>
          <div className="col-span-12 md:col-span-3">
            <div className="h-px bg-gradient-to-l from-transparent via-emerald-500/50 to-emerald-500/50" />
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto text-sm"
        >
          Ready when you are. Send a short note with what you're caring for, and we'll reply with a secure intake and a friendly
          next step.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={EXTERNAL_URLS.EMAIL}
            className="inline-flex items-center space-x-3 border border-emerald-500/30 rounded-full px-8 py-4 bg-gradient-to-br from-foreground/5 to-transparent hover:border-emerald-500/60 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Send email to core@pratejra.build"
          >
            <Mail className="w-5 h-5 text-emerald-200" />
            <span className="text-lg">core@pratejra.build</span>
          </a>

          <a
            href={EXTERNAL_URLS.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 border border-emerald-500/30 rounded-full px-8 py-4 bg-gradient-to-br from-foreground/5 to-transparent hover:border-emerald-500/60 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Visit GitHub repository"
          >
            <Github className="w-5 h-5 text-emerald-200" />
            <span className="text-lg">GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

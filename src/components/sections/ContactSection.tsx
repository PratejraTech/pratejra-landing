import { motion } from "framer-motion";
import { Mail, Github } from "lucide-react";
import { EXTERNAL_URLS } from "../../constants";

/**
 * Contact section component
 */
export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-border/50" aria-label="Contact information">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.03] to-transparent pointer-events-none" aria-hidden="true" />
      <div className="max-w-4xl mx-auto text-center relative border-x border-violet-500/20 px-6 sm:px-8 lg:px-12 py-12">
        {/* Header Grid */}
        <div className="grid grid-cols-12 gap-4 mb-12 items-center">
          <div className="col-span-12 md:col-span-3">
            <div className="h-px bg-gradient-to-r from-transparent via-violet-500/50 to-violet-500/50" />
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="col-span-12 md:col-span-6 text-3xl md:text-4xl font-semibold bg-gradient-to-r from-foreground via-violet-400 to-foreground bg-clip-text text-transparent"
          >
            Contact
          </motion.h2>
          <div className="col-span-12 md:col-span-3">
            <div className="h-px bg-gradient-to-l from-transparent via-violet-500/50 to-violet-500/50" />
          </div>
        </div>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto text-sm"
        >
          For those already aligned, our presence is your ally. <br />
          To engage with us, reach out through the shadows.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href={EXTERNAL_URLS.EMAIL}
            className="inline-flex items-center space-x-3 border-2 border-violet-500/30 rounded-lg px-8 py-4 bg-gradient-to-br from-card to-violet-500/5 hover:bg-gradient-to-br hover:from-violet-500/10 hover:to-violet-500/15 hover:border-violet-500/60 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Send email to core@pratejra.build"
          >
            <Mail className="w-5 h-5 text-violet-400" />
            <span className="text-lg">core@pratejra.build</span>
          </a>
          
          <a
            href={EXTERNAL_URLS.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 border-2 border-violet-500/30 rounded-lg px-8 py-4 bg-gradient-to-br from-card to-violet-500/5 hover:bg-gradient-to-br hover:from-violet-500/10 hover:to-violet-500/15 hover:border-violet-500/60 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Visit GitHub repository"
          >
            <Github className="w-5 h-5 text-violet-400" />
            <span className="text-lg">GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}


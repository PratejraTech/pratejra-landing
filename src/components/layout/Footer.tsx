import { motion } from "framer-motion";

interface FooterProps {
  onNavigateToAllies?: () => void;
}

/**
 * Footer component
 */
export function Footer({ onNavigateToAllies }: FooterProps) {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="border-t-2 border-emerald-500/30 py-8 px-4 sm:px-6 lg:px-8" 
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-x border-emerald-500/20 px-6 sm:px-8 lg:px-12 py-6">
        <div className="flex items-center space-x-3">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/15 to-emerald-500/20 rounded-full blur-md" />
            <div className="relative w-full h-full bg-gradient-to-br from-emerald-600 via-teal-500 to-emerald-500 rounded-full flex items-center justify-center border border-emerald-500/30">
              <div className="w-2 h-2 bg-foreground rounded-full" />
            </div>
          </div>
          <span className="tracking-wider">Pratejra/Shaivra</span>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <button
            onClick={onNavigateToAllies}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 via-lime-500 to-teal-500 text-xs font-semibold tracking-[0.3em] uppercase text-emerald-950 hover:shadow-md hover:shadow-emerald-500/30 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50"
          >
            Work With Shaivra
          </button>
          <div className="text-muted-foreground text-sm">
            v1.0.0 — Authored by Sunyata, August 2025
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

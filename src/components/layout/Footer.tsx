import { motion } from "framer-motion";

/**
 * Footer component
 */
export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="border-t-2 border-violet-500/30 py-8 px-4 sm:px-6 lg:px-8" 
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between border-x border-violet-500/20 px-6 sm:px-8 lg:px-12 py-6">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-violet-500/15 to-indigo-500/20 rounded-full blur-md" />
            <div className="relative w-full h-full bg-gradient-to-br from-indigo-600 via-violet-600 to-violet-500 rounded-full flex items-center justify-center border border-violet-500/30">
              <div className="w-2 h-2 bg-foreground rounded-full" />
            </div>
          </div>
          <span className="tracking-wider">Pratejra/Shaivra</span>
        </div>
        
          <div className="text-muted-foreground text-sm">
          v1.0.0 — Authored by Sunyata, August 2025
        </div>
      </div>
    </motion.footer>
  );
}


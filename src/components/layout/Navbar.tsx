import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { ActiveSection } from "../../types";
import { EXTERNAL_URLS } from "../../constants";

interface NavbarProps {
  activeSection: ActiveSection;
  onSectionChange: (section: ActiveSection) => void;
}

/**
 * Navigation bar component
 */
export function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  const handleContactClick = () => {
    // Scroll to contact section on home page
    if (activeSection === 'home') {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    } else {
      onSectionChange('home');
      // Small delay to ensure section is rendered before scrolling
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b-2 border-violet-500/30" 
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex items-center justify-between gap-4">
          <button 
            onClick={() => onSectionChange('home')}
            className="flex items-center space-x-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg px-2 py-1"
            aria-label="Go to home"
          >
            <div className="relative w-10 h-10 shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-violet-500/15 to-indigo-500/20 rounded-full blur-md group-hover:from-indigo-500/30 group-hover:via-violet-500/25 group-hover:to-indigo-500/30 transition-all" />
              <div className="relative w-full h-full bg-gradient-to-br from-indigo-600 via-violet-600 to-violet-500 rounded-full flex items-center justify-center border border-violet-500/30">
                <div className="w-3 h-3 bg-foreground rounded-full" />
              </div>
            </div>
            <span className="text-lg sm:text-xl font-medium tracking-wider text-foreground">Pratejra/Shaivra</span>
          </button>
          
          <nav className="flex items-center justify-end gap-3 sm:gap-5 lg:gap-7 xl:gap-8" aria-label="Navigation menu">
            <button 
              onClick={() => onSectionChange('home')}
              className={`px-5 py-2.5 text-sm sm:text-base font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                activeSection === 'home' 
                  ? 'text-violet-300 bg-gradient-to-br from-violet-600/20 via-violet-500/15 to-violet-600/20 border border-violet-500/40 shadow-lg shadow-violet-500/10' 
                  : 'text-violet-400/80 hover:text-violet-300 hover:bg-violet-500/10 hover:border hover:border-violet-500/30'
              }`}
              aria-label="Mission section"
              aria-current={activeSection === 'home' ? 'page' : undefined}
            >
              Mission
            </button>
            <button 
              onClick={() => onSectionChange('philosophy')}
              className={`px-5 py-2.5 text-sm sm:text-base font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                activeSection === 'philosophy' 
                  ? 'text-violet-300 bg-gradient-to-br from-violet-600/20 via-violet-500/15 to-violet-600/20 border border-violet-500/40 shadow-lg shadow-violet-500/10' 
                  : 'text-violet-400/80 hover:text-violet-300 hover:bg-violet-500/10 hover:border hover:border-violet-500/30'
              }`}
              aria-label="Philosophy section"
              aria-current={activeSection === 'philosophy' ? 'page' : undefined}
            >
              Philosophy
            </button>
            <button
              onClick={handleContactClick}   
              className="px-5 py-2.5 text-sm sm:text-base font-medium rounded-lg transition-all duration-200 text-violet-400/80 hover:text-violet-300 hover:bg-violet-500/10 hover:border hover:border-violet-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Contact section"
            >
              Contact
            </button>
            <a
              href={EXTERNAL_URLS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-sm sm:text-base font-medium rounded-lg transition-all duration-200 text-violet-400/80 hover:text-violet-300 border-2 border-violet-500/40 hover:border-violet-500/60 hover:bg-gradient-to-br hover:from-violet-600/15 hover:via-violet-500/10 hover:to-violet-600/15 hover:shadow-lg hover:shadow-violet-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="GitHub repository"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </nav>
        </div>
      </div>
    </motion.nav>
  );
}

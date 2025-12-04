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

  const navButtonBase =
    "flex w-32 justify-center items-center text-center px-5 py-2.5 text-sm sm:text-base font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const inactiveStyles = "text-emerald-200/80 hover:text-emerald-100 hover:bg-emerald-500/10 hover:border hover:border-emerald-500/30";
  const activeStyles =
    "text-emerald-50 bg-gradient-to-br from-emerald-600/20 via-teal-500/15 to-emerald-600/20 border border-emerald-500/40 shadow-lg shadow-emerald-900/25";

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b-2 border-emerald-500/30" 
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button 
            onClick={() => onSectionChange('home')}
            className="flex items-center space-x-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg px-2 py-1"
            aria-label="Go to home"
          >
            <div className="relative w-10 h-10 shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/15 to-emerald-500/20 rounded-full blur-md group-hover:from-emerald-500/30 group-hover:via-teal-500/25 group-hover:to-emerald-500/30 transition-all" />
              <div className="relative w-full h-full bg-gradient-to-br from-emerald-600 via-teal-500 to-emerald-500 rounded-full flex items-center justify-center border border-emerald-500/30">
                <div className="w-3 h-3 bg-foreground rounded-full" />
              </div>
            </div>
            <span className="text-lg sm:text-xl font-medium tracking-wider text-foreground">Pratejra/Shaivra</span>
          </button>
          
          <nav className="flex flex-wrap items-center justify-end gap-3 sm:gap-5 lg:gap-7 xl:gap-8" aria-label="Navigation menu">
            <button 
              onClick={() => onSectionChange('home')}
              className={`${navButtonBase} ${activeSection === 'home' ? activeStyles : inactiveStyles}`}
              aria-label="Mission section"
              aria-current={activeSection === 'home' ? 'page' : undefined}
            >
              Mission
            </button>
            <button 
              onClick={() => onSectionChange('philosophy')}
              className={`${navButtonBase} ${activeSection === 'philosophy' ? activeStyles : inactiveStyles}`}
              aria-label="Philosophy section"
              aria-current={activeSection === 'philosophy' ? 'page' : undefined}
            >
              Philosophy
            </button>
            <button 
              onClick={() => onSectionChange('allies')}
              className={`${navButtonBase} ${activeSection === 'allies' ? activeStyles : inactiveStyles}`}
              aria-label="Allies call to action section"
              aria-current={activeSection === 'allies' ? 'page' : undefined}
            >
              Allies
            </button>
            <button
              onClick={handleContactClick}   
              className={`${navButtonBase} ${inactiveStyles}`}
              aria-label="Contact section"
            >
              Contact
            </button>
            <a
              href={EXTERNAL_URLS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className={`${navButtonBase} gap-2 border border-emerald-500/30 hover:border-emerald-500/60 hover:bg-gradient-to-br hover:from-emerald-600/15 hover:via-teal-500/10 hover:to-emerald-600/15 hover:shadow-lg hover:shadow-emerald-900/20 text-emerald-100`}
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

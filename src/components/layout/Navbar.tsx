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
    <nav className="fixed top-0 w-full z-50 bg-[#0D0D0D]/80 backdrop-blur-md border-b border-white/5" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => onSectionChange('home')}
            className="flex items-center space-x-3 group"
            aria-label="Go to home"
          >
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-[#4FC3F7]/20 rounded-full blur-md group-hover:bg-[#4FC3F7]/30 transition-all" />
              <div className="relative w-full h-full bg-gradient-to-br from-[#4FC3F7] to-[#4FC3F7]/60 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-[#F5F5F5] rounded-full" />
              </div>
            </div>
            <span className="text-xl tracking-wider">Pratejra/Shaivra</span>
          </button>
          
          <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm md:text-base md:gap-x-8">
            <button 
              onClick={() => onSectionChange('home')}
              className={`px-3 py-2 transition-colors ${activeSection === 'home' ? 'text-[#4FC3F7]' : 'text-gray-400 hover:text-[#F5F5F5]'}`}
              aria-label="Mission section"
              aria-current={activeSection === 'home' ? 'page' : undefined}
            >
              Mission
            </button>
            <button 
              onClick={() => onSectionChange('philosophy')}
              className={`px-3 py-2 transition-colors ${activeSection === 'philosophy' ? 'text-[#4FC3F7]' : 'text-gray-400 hover:text-[#F5F5F5]'}`}
              aria-label="Philosophy section"
              aria-current={activeSection === 'philosophy' ? 'page' : undefined}
            >
              Philosophy
            </button>
            <button
              onClick={handleContactClick}   
              className="px-3 py-2 text-gray-400 hover:text-[#F5F5F5] transition-colors"
              aria-label="Contact section"
            >
              Contact
            </button>
            <a
              href={EXTERNAL_URLS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-gray-400 hover:text-[#F5F5F5] transition-colors border border-[#4FC3F7]/30 rounded-lg hover:border-[#4FC3F7]/50 hover:bg-[#4FC3F7]/5"
              aria-label="GitHub repository"
            >
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

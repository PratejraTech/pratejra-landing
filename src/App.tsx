import { useCallback, useEffect, useState } from "react";
import { ActiveSection, Project } from "./types";
import { useProjectDescriptions } from "./hooks/useProjectDescriptions";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { ProjectsCarousel } from "./components/sections/ProjectsCarousel";
import { MissionObjectives } from "./components/sections/MissionObjectives";
import { ContactSection } from "./components/sections/ContactSection";
import { PhilosophySection } from "./components/sections/PhilosophySection";
import { ShaderBackground } from "./components/ui/shader-background";
import { AlliesCallToAction } from "./components/sections/AlliesCallToAction";
import { ImpactPulse } from "./components/sections/ImpactPulse";
import { AlliesPlaybook } from "./components/sections/AlliesPlaybook";

/**
 * Main application component
 */
export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');
  const projects = useProjectDescriptions();

  const handleSectionChange = useCallback((section: ActiveSection) => {
    setActiveSection(section);
    if (typeof window !== "undefined") {
      const basePath = `${window.location.pathname}${window.location.search}`;
      const hash = section === 'home' ? '' : `#${section}`;
      const nextUrl = hash ? `${basePath}${hash}` : basePath;
      window.history.replaceState(null, '', nextUrl);
    }
  }, []);

  useEffect(() => {
    const syncHashToSection = () => {
      if (typeof window === "undefined") return;
      const hash = window.location.hash.replace('#', '');
      if (hash === 'philosophy' || hash === 'allies') {
        setActiveSection(hash as ActiveSection);
      } else {
        setActiveSection('home');
      }
    };

    syncHashToSection();
    window.addEventListener('hashchange', syncHashToSection);
    return () => window.removeEventListener('hashchange', syncHashToSection);
  }, []);

  const handleProjectClick = (project: Project) => {
    if (project.isInternal) {
      handleSectionChange('philosophy');
    } else if (project.url) {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Floating Grid Background System */}
      <ShaderBackground />
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-950/40 via-violet-950/30 to-slate-950 pointer-events-none -z-10" aria-hidden="true" />
      <div className="fixed inset-0 bg-gradient-to-r from-indigo-500/[0.03] via-transparent to-cyan-500/[0.03] pointer-events-none -z-10" aria-hidden="true" />
      <div className="fixed inset-0 bg-gradient-to-t from-emerald-500/[0.02] via-transparent to-blue-500/[0.02] pointer-events-none -z-10" aria-hidden="true" />
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8b5cf610_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf610_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)]" aria-hidden="true" />
      <Navbar 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />

      {activeSection === 'home' && (
        <>
          <HeroSection onNavigateToAllies={() => handleSectionChange('allies')} />
          <ImpactPulse />
          <ProjectsCarousel 
            projects={projects} 
            onProjectClick={handleProjectClick} 
          />
          <AlliesPlaybook />
          <MissionObjectives />
          <ContactSection />
        </>
      )}

      {activeSection === 'philosophy' && <PhilosophySection />}
      {activeSection === 'allies' && (
        <>
          <AlliesCallToAction />
          <ContactSection />
        </>
      )}

      <Footer onNavigateToAllies={() => handleSectionChange('allies')} />
    </div>
  );
}

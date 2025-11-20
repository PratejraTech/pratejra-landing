import { useState } from "react";
import { ActiveSection, Project } from "./types";
import { useProjectDescriptions } from "./hooks/useProjectDescriptions";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { ProjectsCarousel } from "./components/sections/ProjectsCarousel";
import { MissionObjectives } from "./components/sections/MissionObjectives";
import { ContactSection } from "./components/sections/ContactSection";
import { PhilosophySection } from "./components/sections/PhilosophySection";

/**
 * Main application component
 */
export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');
  const projects = useProjectDescriptions();

  const handleProjectClick = (project: Project) => {
    if (project.isInternal) {
      setActiveSection('philosophy');
    } else if (project.url) {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F5]">
      <Navbar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />

      {activeSection === 'home' ? (
        <>
          <HeroSection />
          <ProjectsCarousel 
            projects={projects} 
            onProjectClick={handleProjectClick} 
          />
          <MissionObjectives />
          <ContactSection />
        </>
      ) : (
        <PhilosophySection />
      )}

      <Footer />
    </div>
  );
}

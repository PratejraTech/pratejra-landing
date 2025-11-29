import { useState } from "react";
import { motion } from "framer-motion";
import { Project, ActiveSection } from "../../types";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "../ui/carousel";
import { getStatusBadgeColor } from "../../utils/status";
import { useCarouselAutoRotate } from "../../hooks/useCarouselAutoRotate";

interface ProjectsCarouselProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

/**
 * Projects carousel component
 */
export function ProjectsCarousel({ projects, onProjectClick }: ProjectsCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  
  // Auto-rotate carousel
  useCarouselAutoRotate(api);

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 mb-20">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -20, 0],
            y: [0, 30, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-violet-500/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-5xl mx-auto"
      >
        {/* Floating Grid Container */}
        <div className="relative border-2 border-violet-500/40 rounded-2xl bg-gradient-to-br from-card/80 via-card/60 to-violet-500/10 backdrop-blur-xl shadow-2xl shadow-violet-500/20 hover:border-violet-500/60 hover:shadow-violet-500/30 transition-all duration-500 overflow-hidden">
          {/* Grid pattern overlay on container */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf615_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf615_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" aria-hidden="true" />
          
          <div className="relative px-4 sm:px-6 lg:px-8 py-8">
      <Carousel 
        setApi={setApi} 
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <CarouselItem key={`${project.name}-${index}`} className="pl-2 md:pl-4 basis-full">
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => onProjectClick(project)}
                  className="group relative border-2 border-violet-500/30 rounded-2xl p-6 md:p-8 hover:border-violet-500/60 transition-all duration-500 bg-gradient-to-br from-card/90 via-card/70 to-violet-500/10 backdrop-blur-sm cursor-pointer flex flex-col min-h-[220px] hover:scale-[1.03] hover:shadow-2xl hover:shadow-violet-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background overflow-hidden"
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${project.name} project`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onProjectClick(project);
                    }
                  }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    animate={{ 
                      background: [
                        'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 50%, rgba(6, 182, 212, 0.1) 100%)',
                        'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(16, 185, 129, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)',
                        'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 50%, rgba(6, 182, 212, 0.1) 100%)',
                      ]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                  />

                  {/* Status Badge with glow */}
                  <div className="absolute top-4 right-4 z-10">
                    <div 
                      className={`relative w-3 h-3 rounded-full ${getStatusBadgeColor(project.statusColor)} shadow-lg`}
                      aria-label={`Status: ${project.status}`}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`absolute inset-0 rounded-full ${getStatusBadgeColor(project.statusColor)} blur-sm`}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  
                  {/* Icon with enhanced styling */}
                  <div className="mb-4 flex justify-center relative z-10">
                    <div className="relative">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-violet-500/30 to-cyan-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all"
                        aria-hidden="true"
                      />
                      <div className="relative p-3 border-2 border-violet-500/40 bg-gradient-to-br from-indigo-500/20 via-violet-500/25 via-cyan-500/20 to-emerald-500/20 rounded-xl group-hover:from-indigo-500/30 group-hover:via-violet-500/35 group-hover:via-cyan-500/30 group-hover:to-emerald-500/30 group-hover:border-violet-500/60 transition-all duration-500 shadow-lg shadow-violet-500/20">
                        <IconComponent className="w-6 h-6 text-violet-300 group-hover:text-violet-200 transition-colors duration-300" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Name with gradient */}
                  <h3 className="text-lg font-semibold mb-3 text-center bg-gradient-to-r from-foreground via-violet-300 to-foreground bg-clip-text text-transparent relative z-10">
                    {project.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground text-center leading-relaxed relative z-10">
                    {project.description}
                  </p>
                </motion.div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
          </div>
        </div>
      </motion.div>
    </section>
  );
}


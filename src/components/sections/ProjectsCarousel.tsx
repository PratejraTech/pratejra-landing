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
    <span className="component-highlight component-container" data-component="projects-carousel">
      <section id="projects-carousel" className="modern-section layered-background relative px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-7xl mx-auto space-y-16"
        >
        <header className="text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-200/80">active workbench</p>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">Projects we&apos;re tending</h3>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A sampling of tools and collectives currently in our care. Some are public, others prefer to stay in the quiet garden.
          </p>
        </header>

        <div className="relative">
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
                  <CarouselItem key={`${project.name}-${index}`} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                     <motion.div
                       initial={{ opacity: 0, y: 20, scale: 0.97 }}
                       animate={{ opacity: 1, y: 0, scale: 1 }}
                       transition={{ duration: 0.4, delay: index * 0.05 }}
                       onClick={() => onProjectClick(project)}
                       className="group relative border border-emerald-500/20 rounded-xl p-6 bg-gradient-to-br from-foreground/5 via-transparent to-transparent cursor-pointer flex flex-col min-h-[240px] hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-900/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
                      <div className="absolute top-4 right-4">
                        <div
                          className={`relative w-2.5 h-2.5 rounded-full ${getStatusBadgeColor(project.statusColor)}`}
                          aria-label={`Status: ${project.status}`}
                        >
                          <motion.div
                            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2.4, repeat: Infinity }}
                            className={`absolute inset-0 rounded-full ${getStatusBadgeColor(project.statusColor)} blur-sm`}
                            aria-hidden="true"
                          />
                        </div>
                      </div>

                      <div className="mb-4 flex justify-center">
                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-emerald-100" aria-hidden="true" />
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-center text-foreground mb-3">
                        {project.name}
                      </h3>
                      <p className="text-sm text-muted-foreground text-center leading-relaxed flex-1">
                        {project.description}
                      </p>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </motion.div>
    </section>
    </span>
  );
}

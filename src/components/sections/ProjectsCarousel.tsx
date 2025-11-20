import { useState } from "react";
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
    <div className="mb-20 max-w-4xl mx-auto px-6 md:px-8 py-8 border border-[#4FC3F7]/30 rounded-lg bg-white/[0.02]">
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
                <div
                  onClick={() => onProjectClick(project)}
                  className="group relative border border-[#4FC3F7]/30 rounded-lg p-6 md:p-8 hover:border-[#4FC3F7]/50 transition-all duration-300 bg-white/[0.02] cursor-pointer flex flex-col min-h-[200px]"
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
                  {/* Status Badge */}
                  <div 
                    className={`absolute top-3 right-3 w-2.5 h-2.5 rounded-full ${getStatusBadgeColor(project.statusColor)} shadow-lg`}
                    aria-label={`Status: ${project.status}`}
                  />
                  
                  {/* Icon */}
                  <div className="mb-3 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#4FC3F7]/20 rounded-full blur-md group-hover:bg-[#4FC3F7]/30 transition-all" aria-hidden="true" />
                      <div className="relative p-2.5 bg-gradient-to-br from-[#4FC3F7]/20 to-[#4FC3F7]/10 rounded-lg">
                        <IconComponent className="w-5 h-5 text-[#4FC3F7]" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Name */}
                  <h3 className="text-base font-semibold mb-2 text-center text-[#F5F5F5]">
                    {project.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs text-gray-400 text-center leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}


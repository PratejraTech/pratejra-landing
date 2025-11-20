import { useEffect, useRef } from "react";
import type { CarouselApi } from "../components/ui/carousel";
import { CAROUSEL_CONFIG } from "../constants";

// Re-export CarouselApi type for convenience
export type { CarouselApi };

/**
 * Custom hook for carousel auto-rotation
 * @param api - The carousel API instance
 */
export function useCarouselAutoRotate(api: CarouselApi | undefined): void {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!api) return;

    const startAutoRotate = () => {
      intervalRef.current = setInterval(() => {
        try {
          if (api) {
            // With loop: true, scrollNext will automatically loop to the beginning
            api.scrollNext();
          }
        } catch (error) {
          // Error handling - in production, consider using a proper logging service
          if (process.env.NODE_ENV === 'development') {
            console.error('Error scrolling carousel:', error);
          }
        }
      }, CAROUSEL_CONFIG.AUTO_ROTATE_INTERVAL);
    };

    // Small delay to ensure carousel is fully initialized
    const timeoutId = setTimeout(() => {
      startAutoRotate();
    }, CAROUSEL_CONFIG.INITIALIZATION_DELAY);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      clearTimeout(timeoutId);
    };
  }, [api]);
}


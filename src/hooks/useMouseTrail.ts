import { useState, useEffect } from 'react';

export function useMouseTrail() {
  const [trail, setTrail] = useState<Array<{x: number, y: number, id: number}>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPoint = { x: e.clientX, y: e.clientY, id: Date.now() };
      setTrail(prev => [...prev, newPoint].slice(-12)); // Keep last 12 points

      // Remove old points after animation
      setTimeout(() => {
        setTrail(prev => prev.filter(point => point.id !== newPoint.id));
      }, 600);
    };

    // Respect user preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mediaQuery.matches) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return trail;
}

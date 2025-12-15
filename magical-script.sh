#!/bin/bash

echo "🎭 Applying Creative Flair Enhancements to Pratejra/Shaivra..."
echo "=========================================================="

# Create directories
echo "📁 Creating directories..."
mkdir -p src/hooks src/components/ui

# Create useMouseTrail hook
echo "🎯 Creating mouse trail hook..."
cat > src/hooks/useMouseTrail.ts << 'EOF'
import { useState, useEffect } from 'react';

export function useMouseTrail() {
  const [trail, setTrail] = useState<Array<{x: number, y: number, id:
number}>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPoint = { x: e.clientX, y: e.clientY, id: Date.now() };
      setTrail(prev => [...prev, newPoint].slice(-12)); // Keep last 12
points

      // Remove old points after animation
      setTimeout(() => {
        setTrail(prev => prev.filter(point => point.id !== newPoint.id));
      }, 600);
    };

    // Respect user preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion:
reduce)');
    if (!mediaQuery.matches) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return trail;
}
EOF

# Create TypewriterText component
echo "⌨️ Creating typewriter text component..."
cat > src/components/ui/TypewriterText.tsx << 'EOF'
'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export function TypewriterText({
  text,
  speed = 50,
  className = '',
  onComplete
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Respect reduced motion preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion:
reduce)');
    if (mediaQuery.matches) {
      setDisplayText(text);
      setCurrentIndex(text.length);
      onComplete?.();
      return;
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {currentIndex < text.length && (
        <span className="animate-pulse text-emerald-400">|</span>
      )}
    </span>
  );
}

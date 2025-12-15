
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
EOF

# Create ScrollProgress component
echo "📊 Creating scroll progress component..."
cat > src/components/ui/ScrollProgress.tsx << 'EOF'
'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r
from-emerald-500 via-teal-500 to-cyan-500 z-50"
      style={{ scaleX, transformOrigin: '0%' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  );
}
EOF

# Create MagicButton component
echo "🎯 Creating magic button component..."
cat > src/components/ui/MagicButton.tsx << 'EOF'
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MagicButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function MagicButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = ''
}: MagicButtonProps) {
  const baseClasses = "relative overflow-hidden font-semibold rounded-xl
transition-all duration-300 focus:outline-none focus:ring-2
focus:ring-offset-2";

  const variants = {
    primary: "bg-gradient-to-r from-emerald-500 to-teal-500
hover:from-emerald-600 hover:to-teal-600 text-white focus:ring-emerald-500",
    secondary: "bg-white/10 backdrop-blur-sm border border-emerald-300/50
text-emerald-700 hover:bg-emerald-50 focus:ring-emerald-500"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]}
${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/20
to-transparent opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}
EOF

echo "✅ New components created successfully!"

# Modify Header.tsx
echo "🎨 Enhancing Header component..."
if [ -f "src/components/layout/Header.tsx" ]; then
  # Add import
  sed -i '1a import { useMouseTrail } from '\''@/hooks/useMouseTrail'\'';'
src/components/layout/Header.tsx

  # Add hook usage after other hooks
  sed -i '/const pathname = usePathname();/a const trail = useMouseTrail();
' src/components/layout/Header.tsx

  # Add trail rendering before closing header
  sed -i '/<\/header>/i \
      {/* Mouse Trail Effect */}\
      {trail.map((point, index) => (\
        <div\
          key={point.id}\
          className="fixed pointer-events-none w-3 h-3 bg-gradient-to-r
from-emerald-400 to-teal-400 rounded-full opacity-70 animate-pulse z-50"\
          style={{\
            left: point.x - 6,\
            top: point.y - 6,\
            animationDelay: `${index * 25}ms`,\
            filter: `blur(${index * 0.05}px)`,\
          }}\
        />\
      ))}' src/components/layout/Header.tsx

  echo "✅ Header enhanced with mouse trail!"
else
  echo "❌ Header.tsx not found!"
fi

# Modify HeroSection.tsx
echo "🎭 Enhancing Hero Section..."
if [ -f "src/components/sections/HeroSection.tsx" ]; then
  # Add imports
  sed -i '1a import { TypewriterText } from
'\''@/components/ui/TypewriterText'\'';'
src/components/sections/HeroSection.tsx
  sed -i '1a import { MagicButton } from
'\''@/components/ui/MagicButton'\'';' src/components/sections/HeroSection.
tsx

  # Replace headline
  sed -i 's|<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8
leading-tight">|<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold
mb-8 leading-tight">\
  <TypewriterText \
    text="Protecting Communities in the Digital Shadows"\
    speed={80}\
    className="block"\
  />\
</h1>|' src/components/sections/HeroSection.tsx

  # Replace CTA buttons
  sed -i 's|<Link|<MagicButton|g' src/components/sections/HeroSection.tsx
  sed -i 's|</Link>|</MagicButton>|g' src/components/sections/HeroSection.
tsx
  sed -i 's|href="/services"|onClick={() => window.location.href =
'\''/allies'\''}|g' src/components/sections/HeroSection.tsx
  sed -i 's|Explore Solutions|Join Our Allies|g'
src/components/sections/HeroSection.tsx
  sed -i 's|href="/contact"|onClick={() => window.location.href =
'\''/contact'\''}|g' src/components/sections/HeroSection.tsx
  sed -i 's|Get Started|Connect Securely|g'
src/components/sections/HeroSection.tsx

  echo "✅ Hero Section enhanced with typewriter and magic buttons!"
else
  echo "❌ HeroSection.tsx not found!"
fi

# Modify RootLayout.tsx
echo "📊 Adding scroll progress to RootLayout..."
if [ -f "src/components/layout/RootLayout.tsx" ]; then
  # Add import
  sed -i '1a import { ScrollProgress } from
'\''@/components/ui/ScrollProgress'\'';' src/components/layout/RootLayout.
tsx

  # Add ScrollProgress component
  sed -i '/<div className="min-h-screen relative overflow-hidden">/a
<ScrollProgress />' src/components/layout/RootLayout.tsx

  echo "✅ RootLayout enhanced with scroll progress!"
else
  echo "❌ RootLayout.tsx not found!"
fi

echo ""
echo "🎉 Creative Flair Enhancements Applied Successfully!"
echo "=================================================="
echo ""
echo "✨ What you now have:"
echo "  • Glowing cursor trail effects"
echo "  • Typewriter headline animation"
echo "  • Enhanced card hover effects"
echo "  • Scroll progress indicator"
echo "  • Magic button animations"
echo ""
echo "🚀 Test your enhancements:"
echo "  npm run dev"
echo ""
echo "🔧 Verify build:"
echo "  npm run build"
echo ""
echo "🎭 Enjoy your magical Pratejra/Shaivra experience!"
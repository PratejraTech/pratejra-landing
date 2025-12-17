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
  const baseClasses = "relative overflow-hidden font-semibold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform-gpu";

  const variants = {
    primary: "bg-gradient-to-r from-community-500 to-community-600 hover:from-community-600 hover:to-community-700 text-white focus:ring-community-500 shadow-lg shadow-community-500/25 hover:shadow-xl hover:shadow-community-500/40",
    secondary: "bg-white/10 backdrop-blur-sm border border-community-300/30 text-white hover:bg-white/15 hover:border-community-300/50 focus:ring-community-500 shadow-lg hover:shadow-glow-community"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm h-9",
    md: "px-6 py-3 text-base h-11",
    lg: "px-8 py-4 text-lg h-12"
  };

  return (
    <motion.button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <span className="relative z-10">{children}</span>
      {/* Subtle shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      {/* Mystical glow overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}

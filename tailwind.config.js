/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular'],
      },
       colors: {
         border: 'hsl(var(--border))',
         input: 'hsl(var(--input))',
         ring: 'hsl(var(--ring))',
         background: 'hsl(var(--background))',
         foreground: 'hsl(var(--foreground))',
         primary: {
           DEFAULT: 'hsl(var(--primary))',
           foreground: 'hsl(var(--primary-foreground))',
         },
         secondary: {
           DEFAULT: 'hsl(var(--secondary))',
           foreground: 'hsl(var(--secondary-foreground))',
         },
         destructive: {
           DEFAULT: 'hsl(var(--destructive))',
           foreground: 'hsl(var(--destructive-foreground))',
         },
         muted: {
           DEFAULT: 'hsl(var(--muted))',
           foreground: 'hsl(var(--muted-foreground))',
         },
         accent: {
           DEFAULT: 'hsl(var(--accent))',
           foreground: 'hsl(var(--accent-foreground))',
         },
         popover: {
           DEFAULT: 'hsl(var(--popover))',
           foreground: 'hsl(var(--popover-foreground))',
         },
         card: {
           DEFAULT: 'hsl(var(--card))',
           foreground: 'hsl(var(--card-foreground))',
         },

        // Community-focused color palette
        community: {
          50: '#f0fdf9',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // Primary teal
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        hope: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // Warm amber
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        wisdom: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7', // Spiritual purple
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        guardian: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a', // Deep slate
          950: '#020617',
        },
      },
      borderRadius: {
        'xs': '0.5rem',
        'sm': '0.75rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '2.5rem',
        '3xl': '3rem',
        'full': '9999px',
        'DEFAULT': 'var(--radius)',
      },
       keyframes: {
         'accordion-down': {
           from: { height: '0' },
           to: { height: 'var(--radix-accordion-content-height)' },
         },
         'accordion-up': {
           from: { height: 'var(--radix-accordion-content-height)' },
           to: { height: '0' },
         },
          'float': {
            '0%, 100%': { transform: 'translateY(0px) translateZ(0)' },
            '50%': { transform: 'translateY(-6px) translateZ(0)' },
          },
          'glow': {
            '0%, 100%': { opacity: '0.7', transform: 'scale(1) translateZ(0)' },
            '50%': { opacity: '1', transform: 'scale(1.02) translateZ(0)' },
          },
         'shimmer': {
           '0%': { transform: 'translateX(-100%)' },
           '100%': { transform: 'translateX(100%)' },
         },
          'morph': {
            '0%, 100%': { borderRadius: '50%', transform: 'scale(1) translateZ(0)' },
            '50%': { borderRadius: '30%', transform: 'scale(1.05) translateZ(0)' },
          },
          'float-3d': {
            '0%, 100%': { transform: 'translateY(0px) translateZ(0) rotateX(0deg)' },
            '50%': { transform: 'translateY(-12px) translateZ(20px) rotateX(5deg)' },
          },
          'glow-pulse': {
            '0%, 100%': { opacity: '0.7', boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
            '50%': { opacity: '1', boxShadow: '0 0 40px rgba(139, 92, 246, 0.6), 0 0 60px rgba(34, 197, 94, 0.3)' },
          },
          'shimmer-sweep': {
            '0%': { transform: 'translateX(-100%) translateY(-100%) rotate(45deg)' },
            '100%': { transform: 'translateX(200%) translateY(200%) rotate(45deg)' },
          },
          'morph-blob': {
            '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', transform: 'scale(1) translateZ(0)' },
            '25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%', transform: 'scale(1.05) translateZ(10px)' },
            '50%': { borderRadius: '70% 30% 50% 50% / 30% 50% 50% 70%', transform: 'scale(1.1) translateZ(20px)' },
            '75%': { borderRadius: '40% 60% 60% 40% / 60% 30% 70% 40%', transform: 'scale(1.05) translateZ(10px)' },
          },
          'tilt-3d': {
            '0%, 100%': { transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0)' },
            '25%': { transform: 'perspective(1000px) rotateY(5deg) rotateX(2deg) translateZ(20px)' },
            '50%': { transform: 'perspective(1000px) rotateY(0deg) rotateX(-2deg) translateZ(10px)' },
            '75%': { transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg) translateZ(20px)' },
          },
       },
       animation: {
         'accordion-down': 'accordion-down 0.2s ease-out',
         'accordion-up': 'accordion-up 0.2s ease-out',
         'float': 'float 6s ease-in-out infinite',
         'glow': 'glow 4s ease-in-out infinite',
         'shimmer': 'shimmer 2s linear infinite',
         'morph': 'morph 8s ease-in-out infinite',
         'float-3d': 'float-3d 6s ease-in-out infinite',
         'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
         'shimmer-sweep': 'shimmer-sweep 3s linear infinite',
         'morph-blob': 'morph-blob 8s ease-in-out infinite',
         'tilt-3d': 'tilt-3d 6s ease-in-out infinite',
       },
       backdropBlur: {
         'glass': '24px',
       },
       boxShadow: {
         'glow': '0 0 20px rgba(139, 92, 246, 0.3)',
         'glow-community': '0 0 20px rgba(20, 184, 166, 0.3)',
         'glow-hope': '0 0 20px rgba(245, 158, 11, 0.3)',
         'glow-wisdom': '0 0 20px rgba(168, 85, 247, 0.3)',
         'neu': '8px 8px 16px rgba(10, 14, 26, 0.5), -8px -8px 16px rgba(30, 41, 59, 0.3)',
         'neu-inset': 'inset 4px 4px 8px rgba(10, 14, 26, 0.4), inset -4px -4px 8px rgba(30, 41, 59, 0.2)',
       },
    },
  },
  plugins: [],
}
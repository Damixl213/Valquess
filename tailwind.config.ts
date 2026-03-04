import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'valquess-gradient': 'linear-gradient(to bottom, #3B0764, #000000, #581C87)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        'primary-purple': '#6B21A8',
        'gold': '#CDAA5F',
        'purple-900': '#581C87',
        'purple-950': '#3B0764',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'slide-reveal': {
          '0%': {
            opacity: '0',
            transform: 'translateY(1.5rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'underline-slide': {
          '0%': {
            width: '0%',
          },
          '100%': {
            width: '100%',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 10px rgba(205, 170, 95, 0.4)',
          },
          '50%': {
            boxShadow: '0 0 20px rgba(205, 170, 95, 0.6)',
          },
        },
        'spin-slow': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-reveal': 'slide-reveal 0.25s ease-out',
        'underline-slide': 'underline-slide 0.3s ease-out forwards',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'spin-slow': 'spin-slow 3s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      boxShadow: {
        'gold': '0 0 10px rgba(205, 170, 95, 0.4)',
        'gold-lg': '0 0 20px rgba(205, 170, 95, 0.6)',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
      rotate: {
        'y-6': 'rotateY(6deg)',
        'y-12': 'rotateY(12deg)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.rotate-y-6': {
          transform: 'rotateY(6deg)',
        },
        '.rotate-y-12': {
          transform: 'rotateY(12deg)',
        },
        '.transform-gpu': {
          transform: 'translate3d(0, 0, 0)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;

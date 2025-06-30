/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'matte-black': '#1a1a1a',
        'matte-gray': '#2e2e2e',
        'snow-white': '#f8f8f8',
        'neon-green': '#32cd32',
        'neon-red': '#ff1e1e',
        'neon-cyan': '#00ffff',
        'neon-violet': '#8a2be2',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-green': '0 0 10px #32cd32, 0 0 20px #32cd32, 0 0 30px #32cd32',
        'neon-red': '0 0 10px #ff1e1e, 0 0 20px #ff1e1e, 0 0 30px #ff1e1e',
        'neon-cyan': '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff',
        'neon-violet': '0 0 10px #8a2be2, 0 0 20px #8a2be2, 0 0 30px #8a2be2',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 2s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
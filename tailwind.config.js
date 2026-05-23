/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: '#1C3A2A',
        'forest-mid': '#254D38',
        'forest-light': '#2E6045',
        gold: '#C9A84C',
        'gold-light': '#E8C96A',
        cream: '#F5F0E8',
        lime: '#D4E84A',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        bounce: 'bounce 1.4s infinite',
        pulse: 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      boxShadow: {
        gold: '0 0 40px rgba(201,168,76,0.3)',
        'gold-lg': '0 0 60px rgba(201,168,76,0.4)',
      },
    },
  },
  plugins: [],
}

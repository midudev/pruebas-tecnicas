/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mystery: ['Mystery Quest', 'cursive'],
        tilt: ['Tilt Neon', 'cursive'],
        handlee: ['Handlee', 'cursive'],
      },
      backgroundImage: {
        'grated-pattern': "url('public/grated-pattern.webp')",
      },
      keyframes: {
        heightdown: {
          '0%': { height: 'auto' },
          '100%': { height: '0%' },
        },
        heightup: {
          '0%': { height: '0%' },
          '100%': { height: 'auto' },
        },
      },
      animation: {
        heightdown: 'heightdown 1s ease-in-out',
        heightup: 'heightup 1s ease-in-out',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'grid-auto': 'repeat(auto-fit, 250px)',
      },
    },
  },
  plugins: [],
}

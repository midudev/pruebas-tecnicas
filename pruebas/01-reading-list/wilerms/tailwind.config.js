/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // esto creará una clase .grid-cols-auto que aplica grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))
        'auto': 'repeat(auto-fill, minmax(170px, 1fr))',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

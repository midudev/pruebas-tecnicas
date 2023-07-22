/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'images': 'repeat(auto-fill, minmax(190px, 1fr))',
      }
    },
  },
  plugins: [],
}


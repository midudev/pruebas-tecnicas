/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Monteserrat"', 'sans-serif']
      },
      colors: {
        'card-background': '#252429',
        'text': '#FFF',
        'background': '#17171D',
        'primary': '#4B7FF2',
        'secondary': '#FFD440'
      }
    },
  },
  plugins: [],
}
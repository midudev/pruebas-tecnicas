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
        'background': '#EDEDED',
        'primary': '#17171D',
      }
    },
  },
  plugins: [],
}
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
        'background': '#18191d',
        'primary': '#009687',
        'secondary': '#FFD440',
        'sidebar': '#282e33'
      }
    },
  },
  plugins: [],
}
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
        'background-snd': '#5a5b63',
        'primary': '#009687',
        'secondary': '#FFD440',
        'sidebar': '#282e33',
        'links': '#71a1ff'
      },
      screens: {
        'xs': '300px',
        '2xs': '380px',
        '3xs': '410px',
        '4xs': '450px',
        '5xs': '540px',
        '6xs': '570px',
        '7xs': '585px',
        'sm': '640px',
        '2sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      }
    },
  },
  plugins: [],
}
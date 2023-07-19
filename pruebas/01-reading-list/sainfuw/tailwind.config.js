/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0F0F0F',
        'background-light': '#272727',
        'primary': '#FDFDFD',
        'secondary': '#004599',
        'secondary-light': '#67DCF8',
      },
      fontFamily: {
        'pop': ['Poppins Regular', 'sans-serif'],
        'pop-light': ['Poppins Light', 'sans-serif'],
        'pop-bold': ['Poppins Bold', 'sans-serif'],
        'pp': ['PPRader Bold', 'sans-serif']
      },
    },
  },
  plugins: [],
}


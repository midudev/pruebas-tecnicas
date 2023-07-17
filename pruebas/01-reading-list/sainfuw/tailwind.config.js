/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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


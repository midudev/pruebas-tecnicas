/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': 'var(--bg)',
        'background-light': 'var(--bg-light)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'secondary-light': 'var(--secondary-light)',
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


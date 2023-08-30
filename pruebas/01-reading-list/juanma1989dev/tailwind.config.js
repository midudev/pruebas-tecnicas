/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    screens: {
      'xs2': '450px',
      'xs' : '576px',
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px',
    }
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-001': '#242424',
        'gray-002': '#1f1f1f',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require('flowbite/plugin')],
}

import defaultTheme from 'tailwindcss/defaultTheme'

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
    screens: {
      xs: '375px',
      ...defaultTheme.screens,
    },
  },
  plugins: [require('flowbite/plugin')],
}

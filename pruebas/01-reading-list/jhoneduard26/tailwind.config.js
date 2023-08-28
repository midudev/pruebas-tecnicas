/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-alt': '#B2D5EA',
        'accent': '#F9E0AE',
        'title-alt': '#E5F2D0',
        'bg-main': '#FFFDD0',
        'title': '#5B7C99',
        'parragraph': '#B6BDC6',
        'highlight': '#F0E0A2',
    },
  },
  },
  plugins: []
}

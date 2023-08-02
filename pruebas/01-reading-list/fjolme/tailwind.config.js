/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          925: 'rgb(18 18 18)'
        }
      },
      gridTemplateColumns: {
        'auto-fill-12': 'repeat(auto-fill, minmax(12rem, 1fr))'
      }
    }
  },
  plugins: []
}

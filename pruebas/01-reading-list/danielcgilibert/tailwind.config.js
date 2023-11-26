/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        accent: {
          DEFAULT: 'hsl(var(--accent))'
        }
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        listBooks: 'repeat(auto-fill, minmax(170px, max-content))'
      }
    }
  },
  plugins: [require('tailwindcss-animated')]
}

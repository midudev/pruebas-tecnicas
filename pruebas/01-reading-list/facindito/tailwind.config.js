/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        rhino: {
          50: '#f3f5fb',
          100: '#e4e7f5',
          200: '#cfd6ee',
          300: '#afbce1',
          400: '#8899d2',
          500: '#6c7bc5',
          600: '#5962b7',
          700: '#4e52a7',
          800: '#444589',
          900: '#353764',
          950: '#272844'
        }
      }
    }
  },
  plugins: []
}

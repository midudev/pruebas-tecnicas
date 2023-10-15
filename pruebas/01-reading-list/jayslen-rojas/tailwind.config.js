/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: 'Space Grotesk, sans-serif'
      },
      screens: {
        sm: '420px'
      }
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ]
}

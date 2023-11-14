/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        button: '0px 3px 1px 0px #0946f3'
      },
      colors: {
        colorAppPink: '#e59cca',
        colorAppBlue: '#0946f3'
      },
      backgroundColor: {
        colorAppPink: '#e59cca',
        colorAppBlue: '#0946f3',
        colorAppPinkLight: 'rgb(229 156 202)',
        colorAppBlueLight: 'rgb(138 206 253)'
      }
    }
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(130px, 145px))'
      },
      fontFamily: {
        Maven: '"Maven Pro", sans-serif'
      },
      boxShadow: {
        card: '0px 0px 10px rgba(0, 0, 0, 0.05)'
      },
      screens: {
        xs: '460px'
      }
    }
  },
  plugins: []
}

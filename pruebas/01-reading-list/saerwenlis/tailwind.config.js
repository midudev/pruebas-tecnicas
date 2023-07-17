/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        pop:['Poppins']
      },
      colors: {
        primary: '#E75C62',
        secondary:'#0d276b',
        bgwarn: '#fffcfa',
        bgcold: '#F0F4FF',
        off: '#C4C4C4'
      }
    },
  },
  plugins: [],
}

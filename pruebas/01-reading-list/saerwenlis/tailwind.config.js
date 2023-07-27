/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '480px',
      // => @media (min-width: 428px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      
      'md': '980px',
      // => @media (min-width: 980px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily:{
        pop:['Poppins']
      },
      colors: {
        primary: '#E75C62',
        secondary:'#0d276b',
        bgwarn: '#fffcfa',
        bgcold: '#F0F4FF',
        off: '#C4C4C4',
        input: '#F6F6F6'
      }
    },
  },
  plugins: [],
}

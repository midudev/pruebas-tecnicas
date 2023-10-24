/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
     
      aspectRatio: {
        'book': '2 / 3',
      },
      fontFamily: {
        primary: ['BeaufortforLOL-Regular', 'Helvetica', 'sans-serif'],
        title: ['metrofutura', 'Helvetica', 'sans-serif'],
      },
      colors: {
        gold: '#696053',
      },
      gridTemplateColumns: {
        // Simple 8 row grid
        bookXl: 'repeat(auto-fill, minmax(180px, max-content))',
      
      },
    },
    plugins: [],
  },
}

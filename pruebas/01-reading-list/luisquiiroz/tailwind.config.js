/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      },
      fontSize: {
        '2xs': ['0.625rem', '0.75rem']
      },
      colors: {
        'gray-1': '#111517',
        'gray-2': '#202C37',
        'gray-3': '#2B3945',
        'gray-4': '#858585',
        'gray-5': '#FAFAFA',
        'brown-1': '#614C3F',
        'brown-2': '#e6e2d6',
        'brown-3': '#614c3f80',
        'green-1': '#5c9f78',
        'orange-1': '#fc5d47'

        // Dark mode
        // 'gray-2': 'hsl(207, 26%, 17%)', // (Background)
        // 'gray-3': 'hsl(209, 23%, 22%)', //  (Elements)
        // White (Text)

        // Light Mode
        // 'gray-5': 'hsl(0, 0%, 98%)' // (Background)
        //  White (Elements)
        // 'gray-1': 'hsl(200, 15%, 8%)', // (Text)
        // 'gray-4': 'hsl(0, 0%, 52%)', // (Input)
      }
      // colors: {
      //   'dm-dark-blue': 'hsl(209, 23%, 22%)',
      //   'dm-very-dark-blue': 'hsl(207, 26%, 17%)',
      //   'lm-very-dark-blue': 'hsl(200, 15%, 8%)',
      //   'lm-dark-gray': 'hsl(0, 0%, 52%)',
      //   'lm-very-light-gray': 'hsl(0, 0%, 98%)'

      //   // Dark mode
      //   // 'dm-very-dark-blue': 'hsl(207, 26%, 17%)', // (Background)
      //   // 'dm-dark-blue': 'hsl(209, 23%, 22%)', //  (Elements)
      //   // White (Text)

      //   // Light Mode
      //   // 'lm-very-light-gray': 'hsl(0, 0%, 98%)' // (Background)
      //   //  White (Elements)
      //   // 'lm-very-dark-blue': 'hsl(200, 15%, 8%)', // (Text)
      //   // 'lm-dark-gray': 'hsl(0, 0%, 52%)', // (Input)

      // }
    }
  },
  plugins: []
}

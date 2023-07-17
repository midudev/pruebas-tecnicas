/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    fontFamily: {
      gideon: ['GideonRoman-Regular'],
    },
    colors: {
      primary: {
        light: '#FFCDD2',
        dark: '#E57373',
      },
      secondary: {
        light: '#81D4FA',
        dark: '#29B6F6',
      },
    },
    backgroundColor: {
      light: '#F1EEE3',
      dark: '#161617cc',
      aside: '#FDFCF7',
      bookItem: '#F5EFE7',
      bootkItemHover: '#4F709C',
      pagBtn: '#D8C4B6',
      overlayBtn: '#F5F5F5',
      overlayBtnHover: '#E8E2E2',
      overlayModal: '#393E46',
      nav: '#E36064',
    },
    borderColor: {
      nav: '#C8C5BC',
    },
    textColor: {
      light: '#FFFFFF',
      dark: '#000000',
      icons: '#908E8F',
      iconsDark: '#161617cc',
      pagination: '#E36064',
    },
    extend: {
      height: {
        '400': '400px',
      },
      width: {
        '500': '500px',
      },
      maxHeight: {
        '400': '400px',
        '800': '800px',
      },
      maxWidth: {
        '1100': '1100px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-in-out',
      },
      transitionProperty: {
        'bg-color': 'background-color',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

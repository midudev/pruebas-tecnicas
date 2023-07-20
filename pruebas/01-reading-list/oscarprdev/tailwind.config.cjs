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
      doing: '#FF9F00',
      done: '#4CAF50',
      doneLight: '#7ee57e',
      switch: '#C8C5BC',
    },
    borderColor: {
      nav: '#C8C5BC',
      dark: '#000000',
      gray: '#908E8F',
    },
    textColor: {
      light: '#FFFFFF',
      dark: '#000000',
      icons: '#908E8F',
      iconsDark: '#161617cc',
      pagination: '#E36064',
      done: '#4CAF50',
      doing: '#FF9F00',
    },
    fill: {
      removeIcon: '#161617cc',
      dark: '#000000',
      star: '#FFD700',
    },
    extend: {
      height: {
        '400': '400px',
        '300': '300px',
      },
      width: {
        '500': '500px',
        '800': '800px',
        '1090': '1090px',
      },
      maxHeight: {
        '400': '400px',
        '800': '800px',
        '000': '900px',
      },
      maxWidth: {
        '1100': '1100px',
      },
      minHeight: {
        '400': '400px',
      },
      minWidth: {
        '150': '150px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(300px)' },
          '100%': { transform: 'translateX(0)' },
        },
        'item-in': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        'item-out': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.25s ease-in-out',
        'slide-in': 'slide-in 0.4s ease-in-out',
        'item-in': 'item-in 0.5s ease-out',
        'item-out': 'item-in 0.5s ease-out',
      },
      transitionProperty: {
        'bg-color': 'background-color',
      },
    },
  },
}

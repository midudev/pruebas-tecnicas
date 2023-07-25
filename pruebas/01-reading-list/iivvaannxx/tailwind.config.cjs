import defaultConfig from 'tailwindcss/defaultConfig'
import plugin from 'tailwindcss/plugin'

import debugScreensPlugin from 'tailwindcss-debug-screens'

const customVariantsPlugin = plugin(function ({ addVariant, e }) {

  addVariant('details-marker', ['&::-webkit-details-marker', '&::marker'])
})

module.exports = {

  presets: [defaultConfig],
  content: ['./src/**/*.{svelte,html,js,ts}'],

  theme: {

    extend: {

      colors: {

        primary: {

          50:  '#fff2f1',
          100: '#ffe3e1',
          200: '#ffccc8',
          300: '#ffa8a1',
          400: '#fe766b',
          500: '#f74b3c',
          600: '#e74133',
          700: '#c02215',
          800: '#9f2015',
          900: '#842018',
          950: '#480c07',
        },
      },

      spacing: {

        header: '6rem',
      },

      height: {

        sidebar: 'calc(100vh - 6rem)',
      },

      rotate: {

        '135': '135deg',
      },

      keyframes: {

        'zoom-in': {

          '0%': { transform: 'scale(0.7)' },
          '100%': { transform: 'scale(1)' }
        },

        'zoom-out': {

          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.7)' }
        },

        'fade-in': {

          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },

        'fade-out': {

          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        }
      },

      animation: {

        'zoom-in': 'zoom-in 0.25s ease-in-out forwards',
        'zoom-out': 'zoom-out 0.25s ease-in-out forwards',
        'fade-in': 'fade-in 0.25s ease-in-out forwards',
        'fade-out': 'fade-out 0.25s ease-in-out forwards'
      },

      aspectRatio: {

        'cover': '2 / 3'
      },

      gridTemplateColumns: {

        'main': 'auto 1fr auto',
        'library': 'repeat(auto-fill, minmax(15rem, 1fr))'
      },

      gridTemplateRows: {

        'app': 'auto 1fr'
      },

      content: {

        empty: ''
      }
    }
  },

  plugins: [debugScreensPlugin, customVariantsPlugin]
}

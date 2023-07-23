import defaultConfig from 'tailwindcss/defaultConfig'
import plugin from 'tailwindcss/plugin'

import prelinePlugin from 'preline/plugin'
import debugScreensPlugin from 'tailwindcss-debug-screens'

const customVariantsPlugin = plugin(function ({ addVariant, e }) {

  addVariant('details-marker', ['&::-webkit-details-marker', '&::marker'])
})

module.exports = {

  presets: [defaultConfig],
  content: ['node_modules/preline/dist/*.js', './src/**/*.{svelte,html,js,ts}'],

  theme: {

    extend: {

      transitionProperty: {

        'max-h': 'max-height',
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

        'library': 'repeat(auto-fill, minmax(15rem, 1fr))'
      },

      content: {

        empty: '""'
      }
    }
  },

  plugins: [debugScreensPlugin, prelinePlugin, customVariantsPlugin]
}

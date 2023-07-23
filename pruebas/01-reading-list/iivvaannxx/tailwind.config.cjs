import defaultConfig from 'tailwindcss/defaultConfig'

import prelinePlugin from 'preline/plugin'
import debugScreensPlugin from 'tailwindcss-debug-screens'

module.exports = {

  presets: [defaultConfig],
  content: ['node_modules/preline/dist/*.js', './src/**/*.{svelte,html,js,ts}'],

  theme: {

    extend: {

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

  plugins: [debugScreensPlugin, prelinePlugin]
}

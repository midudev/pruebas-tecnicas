import defaultConfig from 'tailwindcss/defaultConfig'
import xtendConfig from 'xtendui/tailwind.preset'

import gridAreasPlugin from '@savvywombat/tailwindcss-grid-areas'

module.exports = {

  presets: [defaultConfig, xtendConfig],
  content: ['./node_modules/xtendui/src/*.mjs', './src/**/*.{svelte,html,js,ts}'],

  theme: {

    extend: {

      gridTemplateAreas: {

        'base': [

          'header header',
          'aside  main',
        ]
      },

      gridTemplateColumns: {

        'base': '0.5fr 1.5fr'
      },

      gridTemplateRows: {

        'base': '0.15fr 1.85fr'
      }
    }
  },

  plugins: [gridAreasPlugin]
}

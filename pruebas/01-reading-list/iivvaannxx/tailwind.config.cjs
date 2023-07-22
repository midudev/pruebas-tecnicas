import defaultConfig from 'tailwindcss/defaultConfig'
import gridAreasPlugin from '@savvywombat/tailwindcss-grid-areas'

module.exports = {

  presets: [defaultConfig],
  content: ['./src/**/*.{svelte,html,js,ts}'],

  theme: {

    extend: {

      aspectRatio: {

        'cover': '2 / 3'
      },

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

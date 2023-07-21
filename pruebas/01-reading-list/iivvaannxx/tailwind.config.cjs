import defaultConfig from 'tailwindcss/defaultConfig'
import xtendConfig from 'xtendui/tailwind.preset'

module.exports = {

  presets: [defaultConfig, xtendConfig],
  content: ['./node_modules/xtendui/src/*.mjs', './src/**/*.{svelte,html,js,ts}']
}

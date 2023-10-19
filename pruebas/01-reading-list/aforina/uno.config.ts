import {
  defineConfig,
  presetIcons,
  presetWebFonts,
  presetTypography,
  presetUno
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      customLight: '#DBE1EA',
      customBlue: '#AFDCF0',
      customPurple: '#9667DD',
      customPink: '#E5797F',
      customGray: '#8A8F96'
    }
  },
  presets: [
    presetUno(),
    presetTypography(),
    presetWebFonts({}),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      },
      cdn: 'https://esm.sh/'
    })
  ]
})

import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import { vitePreprocess } from '@sveltejs/kit/vite'
import autoprefixer from 'autoprefixer'

/** @type {import('@sveltejs/kit').Config} */
const config = {

  preprocess: [

    vitePreprocess(),
    preprocess({

      postcss: {

        plugins: [

          autoprefixer
        ]
      }
    })
  ],

  kit: {

    adapter: adapter(),
    alias: {

      $features: 'src/features',
    }
  },
}

export default config

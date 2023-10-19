import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from 'astro/config'

import netlify from "@astrojs/netlify/functions"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'hybrid',
  adapter: netlify(),
  build: {
    format: 'file'
  }
});
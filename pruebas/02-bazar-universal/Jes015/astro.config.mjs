import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from 'astro/config'

import node from "@astrojs/node"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'hybrid',
  adapter: node({
    mode: "standalone"
  }),
  build: { format: 'file' }
});
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from 'astro/config'

import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'hybrid',
  adapter: vercel(),
  build: {
    format: 'file'
  }
});
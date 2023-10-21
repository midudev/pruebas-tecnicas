import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"
import netlify from "@astrojs/netlify"

//astro.build/config
export default defineConfig({
    image: {
        remotePatterns: [{ protocol: "https" }],
        domains: ["https://i.dummyjson.com"],
    },
    output: "server",
    adapter: netlify(),
    integrations: [react(),netlify(),tailwind({
        applyBaseStyles:false
    })]
});
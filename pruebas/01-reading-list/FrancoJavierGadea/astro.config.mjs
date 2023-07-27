import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import node from '@astrojs/node';
import netlify from '@astrojs/netlify/edge-functions';

// https://astro.build/config
export default defineConfig({

    output: 'server',
    
    // adapter: node({
    //   mode: 'standalone',
    // }),

    adapter: netlify(),

    integrations: [react()],

    experimental: {
      viewTransitions: true
    }
});
import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "cypress-ct-qwik" as any,
      bundler: "vite",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

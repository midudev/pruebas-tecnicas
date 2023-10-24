import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "sass";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      // Tell Vite to use `sass` as a preprocessor
      scss: {
        implementation: sass,
      },
    },
  },
});

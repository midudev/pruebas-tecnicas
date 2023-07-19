import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { macroPlugin } from "@builder.io/vite-plugin-macro";

export default defineConfig(() => {
  return {
    plugins: [
      macroPlugin({ preset: "pandacss" }),
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
    ],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});

import { defineConfig } from "@pandacss/dev";
import globalCss from "~/styles/globalCss";
import theme from "~/styles/theme";

export default defineConfig({
  jsxFramework: "qwik",

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: theme,
  },

  // The output directory for your css system
  outdir: "src/styled-system",
  globalCss,
});

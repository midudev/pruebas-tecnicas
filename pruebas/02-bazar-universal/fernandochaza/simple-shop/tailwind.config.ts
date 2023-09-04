import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "media", // Adding this disables the prefers-color-scheme feature to use a manual toggler
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto)"],
        mono: ["var(--font-noto-mono)"]
      }
    }
  },
  plugins: []
}
export default config

import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(hsl(var(--tw-color-start)), hsl(var(--tw-color-end)))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, hsl(var(--tw-color-start)), hsl(var(--tw-color-end)))",
      },
    },
  },
  plugins: [],
}
export default config

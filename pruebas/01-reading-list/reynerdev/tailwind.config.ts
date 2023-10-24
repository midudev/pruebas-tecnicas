import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        mainColumnLayout: "5% 65% 30%",
      },
      gridTemplateRows: {
        mainRowLayout: "5% 5% auto 1fr",
      },
      boxShadow: {
        book: "-24px 12px 30px 0px rgba(0,0,0,0.19)",
        book2:
          "rgba(0, 0, 0, 0.2) -5px 5px 2px 1px, rgba(0, 0, 0, 0.15) -8px 8px 2px 1px, rgba(0, 0, 0, 0.1) -10px 10px 2px 1px, rgba(0, 0, 0, 0.05) -12px 12px, rgba(0, 0, 0, 0.05) -14px 14px",
      },
      colors: {
        primary: {
          50: "#FDFBF7",
          100: "#DFDED5",
          150: "#E4E1D9",
          ["150-light"]: "rgba(228,225,217,0.38)",
          200: "#DDDACF",
          300: "#C3BEB2",
        },
        softpink: "#E16267",
        "primary-black": "#2D2630",
        gray: "#A7A2A4",
      },
      fontFamily: {
        sans: ["var(--font-raleway)"],
      },
    },
  },
  plugins: [],
} satisfies Config;

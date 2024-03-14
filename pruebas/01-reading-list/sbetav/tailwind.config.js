/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        bg: "#F8F3ED",
        "bg-secondary": "#F3E5D0",
        text: "#2C1810",
        "text-muted": "#847068",
      },
      margin: {
        custom: "5rem 2rem",
      },
    },
  },
  plugins: [],
};

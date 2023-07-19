/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "#F2EBE3",
        "list-bg": "#BEAF98",
        "primary-text": "#432a17",
      },
      fontFamily: {
        lugarismo: ["Lugrasimo", "cursive"],
      },
    },
  },
  plugins: [],
};

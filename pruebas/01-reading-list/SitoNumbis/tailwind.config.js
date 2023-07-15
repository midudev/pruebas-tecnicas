/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "crimson",
      secondary: "dodgerblue",
      "dark-bg": "#1b1b1b",
      "dark-bg-opacity": "#1b1b1b8a",
      "dark-alt-bg": "#222222",
      "dark-alt-bg-opacity": "#2222228a",
      "dark-text": "#fbfbfb",
      "dark-alt-text": "#ababab",
    },
    extend: {},
  },
  plugins: [],
};

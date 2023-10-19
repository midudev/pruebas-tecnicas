/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#ede0d4",
      text: "#352208",
      primary: "#b08968",
      secondary: "#c9a227",

      darkBackground: "#121212",
      darkText: "#F2EFE9",

      white: "#FFFFFF",
      black: "#000000",
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        "primary-color": "#282d33",
        "secondary-color": "#121212",
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(170px, 1fr))",
      },
    },
  },
  plugins: [],
};

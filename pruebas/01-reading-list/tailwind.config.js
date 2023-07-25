/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minWidth: {
        "15vw": "15vw",
      },
      colors: {
        primary: {
          green: "#A4BFA8",
        },
      },
    },
  },
  plugins: [],
};

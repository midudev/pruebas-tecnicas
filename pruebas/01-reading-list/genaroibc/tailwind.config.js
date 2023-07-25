/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        "shake-and-scale":
          "shakeAndScale 0.5s cubic-bezier(.36,.07,.19,.97) both"
      }
    }
  },
  plugins: []
}

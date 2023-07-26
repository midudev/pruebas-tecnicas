/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'books': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      animation: {
        "slide-in-fwd-right": "slide-in-fwd-right 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both"
      },
      keyframes: {
        "slide-in-fwd-right": {
          "0%": {
              transform: "translateZ(-1400px) translateX(1000px)",
              opacity: "0"
          },
          to: {
              transform: "translateZ(0) translateX(100)",
              opacity: "1"
          }
        }
      }
    },
  },
  plugins: [],
}


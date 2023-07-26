/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  /*
   * https://github.com/tailwindlabs/tailwindcss/discussions/1739
   *
   * https://www.getfishtank.com/blog/tailwind-css-for-touch-screen-media-queries
   */
  future: {
    hoverOnlyWhenSupported: true,
  },
};

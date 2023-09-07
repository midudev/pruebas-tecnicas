const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
  purgecss: [
    "./src/**/*.{js,jsx}"
  ]
}
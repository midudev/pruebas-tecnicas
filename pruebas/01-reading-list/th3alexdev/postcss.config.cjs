const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    purgecss({
      content: [
        './src/**/*.js',
        './src/**/*.jsx'
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
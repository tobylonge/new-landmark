const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    purgecss({
      content: ["**/*.html", "**/*.js"],
      defaultExtractor: (content) =>
        content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
    }),
    cssnano,
  ],
};

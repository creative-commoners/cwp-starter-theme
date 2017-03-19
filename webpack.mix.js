let mix = require("laravel-mix").mix;

mix.webpackConfig({
  externals: {
    '$': 'jQuery',
    'jquery': 'jQuery'
  }
});

mix.setPublicPath("dist");

mix.js("src/js/main.js", "dist/js/main.js");
mix
  .sass("src/scss/main.scss", "dist/css/main.css")
  .sass("src/scss/editor.scss", "dist/css/editor.css");

mix.copy("src/images", "dist/images");
const {dest, src} = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sassProcessor = require('gulp-sass');

// We want to be using canonical Sass, rather than node-sass
sassProcessor.compiler = require('sass');


// The main Sass method grabs all root Sass files,
// processes them, then sends them to the output calculator.
// SourceMaps are only created when isProduction is false
const sass = () => {
  return src('./page/scss/*.scss')
    .pipe(sassProcessor().on('error', sassProcessor.logError))
    .pipe(
      cleanCSS({level: 2})
    )
    .pipe(dest('./page/css', {sourceMaps: true}));
};

module.exports = sass;

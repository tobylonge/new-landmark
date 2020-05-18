const { src, dest, watch, series } = require('gulp');
const postcss = require('gulp-postcss');
const browserSync = require('browser-sync').create();

function cssTask() {
    return src('./css/styles.css')
        .pipe(postcss())
        .pipe(dest('./build/'))
}

function watchTask() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    watch('./css/styles.css', cssTask)
    watch('./*.html').on('change', browserSync.reload)
}

exports.default = series(cssTask, watchTask);
const { src, dest, watch, series } = require("gulp");
const postcss = require("gulp-postcss");
const browserSync = require("browser-sync").create();
const minify = require("gulp-babel-minify");
const fileinclude = require("gulp-file-include");
const del = require("del");

// gulp.task("minify", () =>
//   gulp.src("./build/app.js")
//     .pipe(minify({
//       mangle: {
//         keepClassName: true
//       }
//     }))
//     .pipe(gulp.dest("./dist"));
// );

// Clean output directory
function clean() {
  return del(["build"]);
}

function jsTask() {
  return src("./js/main.js")
    .pipe(
      minify({
        mangle: {
          keepClassName: true,
        },
      })
    )
    .pipe(dest("./build/js/"));
}

function cssTask() {
  return src("./css/styles.css").pipe(postcss()).pipe(dest("./build/css/"));
}

function includefileTask() {
  return src(["index.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(dest("./build/"));
}

function watchTask() {
  clean();
  browserSync.init({
    server: {
      baseDir: "./build/",
    },
  });
  watch("./css/styles.css", cssTask);
  watch("./js/main.js", jsTask);
  watch("index.html", includefileTask);
  watch("./*.html").on("change", browserSync.reload);
}

exports.default = series(clean, cssTask, jsTask, includefileTask, watchTask);

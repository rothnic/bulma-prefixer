"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var cleanCSS = require("gulp-clean-css");
var concat = require("gulp-concat");
var bless = require("gulp-bless");
const postcss = require("gulp-postcss");
const prefixer = require("postcss-prefixer");

var paths = {
  "source-sass": "./sass/*.sass",
  "transpiled-css": "./css",
};

/* Compile scss files */
gulp.task("sass", function () {
  var processes = [
    // Add bu- to start of all classes
    // Ignore Bulma modifiers "is-"
    prefixer({
      prefix: "bu-",
      ignore: [/is-/],
    }),
  ];

  return gulp
    .src(paths["source-sass"])
    .pipe(sass())
    .pipe(postcss(processes))
    .pipe(gulp.dest(paths["transpiled-css"]));
});

gulp.task("sass:watch", function () {
  gulp.watch(gulp.src(paths["source-sass"]), ["sass"]);
});

gulp.task("default", gulp.series("sass", "sass:watch"));

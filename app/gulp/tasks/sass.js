//compile scss to css

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../config.js').css;
var debug = require('gulp-debug');
// var concat = require('gulp-concat');

gulp.task('sass', function() {
    return gulp.src(config.sass_src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.dest));
});
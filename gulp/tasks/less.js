var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../config.js').css;
// var concat = require('gulp-concat');

gulp.task('less', function() {
    return gulp.src(config.less_src)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(gulp.dest(config.dest));
    
});
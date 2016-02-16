var gulp = require('gulp');
var config = require('../config.js');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');


gulp.task('js', function () {
    gulp.src(config.src + '_widgets/**/*.js')
    	.pipe(concat('widget.js'))
        .pipe(gulp.dest(config.dest + 'static/'));

    gulp.src(config.src + '_common/*.js')
    	.pipe(concat('vendor.js'))
        .pipe(gulp.dest(config.dest + 'static/'));
});


gulp.task('js-rebuild', ['js'], function() {
    browserSync.reload();
});
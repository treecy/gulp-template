var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var config = require('../config.js').css;


/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    gulp.src(config.pageSrc)
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify
        }))
        .pipe(prefix( { browsers: ['last 2 versions'] } ))
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({stream:true}));

    return gulp.src(config.commonSrc)
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify
        }))
        .pipe(prefix( { browsers: ['last 2 versions'] } ))
        .pipe(concat('common.css'))
        .pipe(gulp.dest( config.dest + 'static/'))
        .pipe(browserSync.reload({stream:true}));
});
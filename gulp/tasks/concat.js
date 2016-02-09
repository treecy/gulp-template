var gulp      = require('gulp');
var concat    = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../config.js').css;
// var rev = require('gulp-rev');
// var revCollector = require('gulp-rev-collector');  

gulp.task('css-concat',['less'], function() {
    return gulp.src([
    	config.dest + '/widgets/common/**/jquery*.css',
    	config.dest + '/widgets/common/**/!(jquery)*.css'
    ])
    .pipe(concat('core-base.css'))
    .pipe(minifyCss({'keepSpecialComments':0}))
    // .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest(config.pkg_dest));
});



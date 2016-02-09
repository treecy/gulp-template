var gulp      = require('gulp');
var debug = require('gulp-debug');
var concat    = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../config.js');
// var rev = require('gulp-rev');
// var revCollector = require('gulp-rev-collector');  


//concat and minify css file
var cssConfig = config.css;
var cssTasks = [];

for (var name in cssConfig.packages) {
	var pack = cssConfig.packages[name];console.log(pack);
	gulp.task(name,['sass'], function() {
	    return gulp.src(pack)
	    .pipe(debug())
	    .pipe(concat(name + '.css'))
	    .pipe(minifyCss({'keepSpecialComments':0}))
	    // .pipe(sourcemaps.write('../maps'))
	    .pipe(gulp.dest(cssConfig.pkg_dest));
	});
	cssTasks.push(name);
}

gulp.task('css-concat',cssTasks);




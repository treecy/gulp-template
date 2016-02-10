var gulp = require('gulp');
var browserify = require('browserify');
var vueify = require('vueify');
var transform = require('vinyl-transform');

var config = require('../config.js').js;
 
// Basic usage 
gulp.task('browserify', function() {
	var browserified = transform(function(filename) {
	    return browserify(filename)
	    	.transform(vueify)
	    	.bundle();
	});
	
	return gulp.src(config.browserifySrc)
		.pipe(browserified)
		.pipe(gulp.dest(config.dest));
});
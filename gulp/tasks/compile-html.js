var gulp        = require('gulp');
var jade = require('gulp-jade');
var browserSync = require('browser-sync');
var inject = require('gulp-inject');
var config = require('../config.js');
var rename = require("gulp-rename");
var replace = require('gulp-replace');
var temp = './_temp/';
global['_path'] = '';


gulp.task('temp', function (callback) {
	var stream1 = gulp.src(config.src + '_widgets/**/*.jade')
		.pipe(rename(function (path) {
			global['_path'] = path.dirname;
		}))
		.pipe(replace('./images',function (str) {
			return '/static/images/' + global['_path'];
		}))
		.pipe(gulp.dest(temp + '_widgets/'));

    var stream2 = gulp.src([config.src + '*.jade',config.src + '!(_widgets)/*.jade'])
    	.pipe(gulp.dest(temp));

    return stream1;

});


gulp.task('jade',['temp'], function() {
    var YOUR_LOCALS = {};
    gulp.src([temp + '*.jade', temp + '!(_)*/*.jade'])
    	.pipe(jade({
            locals: YOUR_LOCALS
        }))
        .pipe(
        	inject(gulp.src([config.dest + 'static/*.js', config.dest + 'static/*.css'], {read: false}),{
	        	transform: function (filepath) {
	        		if(filepath.slice(-2) == 'js'){
	        			return '<script type="text/javascript" src="' + filepath.slice(4) +'"></script>';
	        		}else if(filepath.slice(-3) == 'css'){
	        			return '<link type="text/css" rel="stylesheet" href="' + filepath.slice(4) +'">';
	        		}
	        		
	        	}
        	})
        )
    	.pipe(gulp.dest(config.dest));
});

gulp.task('jade-rebuild', ['jade'], function() {
    browserSync.reload();
});



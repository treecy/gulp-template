var gulp        = require('gulp');
var rename = require("gulp-rename");
var config = require('../config.js');
var replace = require('gulp-replace');
var _path = '';

gulp.task('static', function () {
    gulp.src([config.src + '_widgets/**/*.jpg', config.src + '_widgets/**/*.png'])
    	.pipe(rename(function (path) {
    		path.dirname = path.dirname.replace('images','');
    	}))
    	.pipe(gulp.dest(config.dest + 'static/images/'));

    // gulp.src(config.src + '_widgets/**/*.jade')
    // 	.pipe(rename(function (path) {
    // 		_path = path.dirname;
    // 	}))
    // 	.pipe(replace('./images/','/static/images/' + _path))
    // 	.pipe(gulp.dest(config.src + '_widgets/'));
});


var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config.js');

/**
 * Wait for jade-build, then launch the Server
 */
gulp.task('browser-sync', ['static','sass', 'js' ,'jade'], function() {
    browserSync({
        server: {
            baseDir: 'www'
        }
    });
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch( config.src + '**/*.scss' , ['sass']);
    gulp.watch( config.html.allSrc , ['jade-rebuild']);
    gulp.watch( config.src + '**/*.js' , ['js-rebuild']);
});
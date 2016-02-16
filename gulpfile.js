var requireDir = require('require-dir');
var gulp = require('gulp');

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */

gulp.task('default', ['browser-sync', 'watch']);




/**
 * Require all tasks in gulp/, including subfolders
 * @type {[type]}
 */

requireDir('./gulp/tasks', {recurse: true});

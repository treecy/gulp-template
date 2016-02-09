var gulp = require('gulp');

gulp.task('default', function() {
    gulp.start('sass','css-concat');
});
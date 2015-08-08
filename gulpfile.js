var gulp = require('gulp'),
    karma = require('gulp-karma'),
    testFiles = ['js/curry.js', 'test/spec.js'];

gulp.task('tests', function() {
    gulp.src(testFiles)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            throw err;
        });
});

gulp.task('watch', function() {
    'use strict';

    gulp.watch(testFiles, function() {
        gulp.start('tests');
    });
});

gulp.task('default', function() {
    gulp.start('tests');
});

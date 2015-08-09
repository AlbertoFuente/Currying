var gulp = require('gulp'),
    Server = require('karma').Server,
    testFiles = ['js/curry.js', 'test/spec.js'];

gulp.task('tests', function() {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }).start();
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

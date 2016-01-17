var NwBuilder = require('nw-builder');
var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('nw', function () {

    var nw = new NwBuilder({
        files: './public/**/*',
        platforms: ['win','osx']
    });

    // Log stuff you want
    nw.on('log', function (msg) {
        gutil.log('nw-builder', msg);
    });

    // Build returns a promise, return it so the task isn't called in parallel
    return nw.build().catch(function (err) {
        gutil.log('nw-builder', err);
    });
});

gulp.task('default', ['nw']);
// Modules required for this task
var gulp = require('gulp'),
    Server = require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/../karma.conf.js',
        singleRun: true
    }, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
    new Server({
        configFile: __dirname + '/../karma.conf.js'
    }, done).start();
});

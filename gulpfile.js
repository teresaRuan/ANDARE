const gulp = require('gulp');
const webpack = require('gulp-webpack');

gulp.task('webpack', function(){
    return gulp.src('./app/index.js')
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest('./dist'));
});

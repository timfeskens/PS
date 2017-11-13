var gulp = require('gulp');
var sass = require('gulp-sass');

module.exports = function () {
    return gulp.src('./styles/style.scss')
    .pipe(sass({style: 'expanded'}))
    .pipe(gulp.dest('assets'))
};
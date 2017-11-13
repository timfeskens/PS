var gulp = require('gulp');
var requireDir = require('require-dir');
var folder = requireDir('./tasks');

var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('sass', folder.sass);
gulp.task('uglify', folder.uglify);

gulp.task('default', ['uglify', 'sass']);
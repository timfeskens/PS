// Gulp tasks
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('copy', function() {
    gulp.src('index.html')
    .pipe(gulp.dest('assets'))
});

gulp.task('sass', function() {
    gulp.src('styles/style.scss')
    .pipe(sass({style: 'expanded'}))
    .pipe(gulp.dest('assets'))
});

gulp.task('uglify', function() {
    gulp.src('scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('assets'))
});

gulp.task('default', ['uglify', 'sass']);
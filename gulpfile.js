const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
var less = require('gulp-less');
const browserSync = require('browser-sync').create();



exports.default = () => (
    gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build'))
);


gulp.task('less', function() {
    return gulp.src('less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream)



});

function watch() {
    browserSync.init({
        server: {
            baseDir: './',
        }
    });
    gulp.watch('./less/**/*.less');
    gulp.watch('./*.html').on('change', browserSync.reload)
}

exports.watch = watch;
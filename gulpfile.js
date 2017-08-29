const gulp = require('gulp'),
    concat = require('gulp-concat'),
    htmlmin = require('gulp-htmlmin'),
    sass = require('gulp-sass');

gulp.task('html:minify', () =>
    gulp.src('./src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('assets'))
);

gulp.task('sass', () =>
    gulp.src('./src/style/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css', ))
        .pipe(gulp.dest('./assets/css'))
);

gulp.task('watch', ['sass', 'html:minify'], () => {
    gulp.watch('./src/style/**/*.scss', ['sass']);
    gulp.watch('./src/**/*.html', ['html:minify']);
});

gulp.task('default', ['sass', 'html:minify']);

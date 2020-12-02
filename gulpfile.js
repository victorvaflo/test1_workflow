const { series, parallel, dest, watch } = require('gulp')
const gulp = require('gulp');
const gulpEsbuild = require('gulp-esbuild')
const pug = require('gulp-pug')

gulp.task('build', function (done) {
    gulp.src('src/*.pug').pipe(pug({})).pipe(gulp.dest('dist'));
    gulp.src('src/*.ts').pipe(gulpEsbuild({})).pipe(gulp.dest('dist'));
    done();
});

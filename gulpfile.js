const { series, parallel, dest, watch } = require('gulp')
const gulp = require('gulp');
const ts = require('gulp-typescript')
const project = ts.createProject('tsconfig.json')
const pug = require('gulp-pug')

gulp.task('pug', function () {
    return gulp.src('src/*.pug').pipe(pug({})).pipe(gulp.dest('dist'));
})

gulp.task('compileTs', function () {
    return gulp.src('src/*.ts').pipe(project()).pipe(gulp.dest('dist'));
})


gulp.task('build', function (done) {
    gulp.watch('src/*.ts', series('compileTs'));
    gulp.watch('src/*.pug', series('pug'));
    done();
});

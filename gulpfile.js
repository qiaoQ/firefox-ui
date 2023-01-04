const gulp = require('gulp');
const gulpSass = require('gulp-sass')(require('sass'));
const minifyCSS = require('gulp-minify-css');

gulp.task('gulp-sass', async function() {
  return gulp.src('components/css/**/*css')
  .pipe(gulpSass())
  .pipe(minifyCSS())
  .pipe(gulp.dest('dist/css'));
})
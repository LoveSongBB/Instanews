const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const prettyError = require('gulp-prettyerror');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const terser = require('gulp-terser');
const uglifycss = require("gulp-uglifycss");
// Create basic Gulp tasks

gulp.task('sass', function(done) {
  gulp
    .src('./sass/*.scss')
    .pipe(prettyError())
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions']
      })
    )
    .pipe(uglifycss())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./build/css'));

  done();
});

gulp.task('lint', function() {
  return (
    gulp
      .src(['./js/*.js'])
      .pipe(prettyError())
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
  );
});

gulp.task(
  'scripts',
  gulp.series('lint', function() {
    return gulp
      .src('./js/*.js')
      .pipe(terser())
      .pipe(
        rename({
          extname: '.min.js'
        })
      )
      .pipe(gulp.dest('./build/js'));
  })
);

// Set-up BrowserSync and watch

gulp.task('browser-sync', function(done) {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp
    .watch(['build/css/*.css', 'build/js/*.js'])
    .on('change', browserSync.reload);

  done();
});

gulp.task('watch', function(done) {
  gulp.watch('js/*.js', gulp.series('scripts'));
  gulp.watch('sass/*.scss', gulp.series('sass'));
  done();
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'));
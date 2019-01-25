const gulp = require('gulp');
const uglifycss = require('gulp-uglifycss');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const prettyError = require('gulp-prettyerror');
const eslint = require('gulp-eslint');
const terser = require('gulp-terser');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');



// Task to compiling and minifying SASS
gulp.task('sass', function () {
  return gulp
    .src("./sass/*.scss")
    .pipe(prettyError())
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ["last 2 versions"]
    }))
    .pipe(gulp.dest("./build/css"))
    .pipe(uglifycss())
    .pipe(rename({ extname: ".min.css" }))
    .pipe(gulp.dest("./build/js"));
});

// Task to watch for changes to CSS files
gulp.task("watch", function (done) {
  gulp.watch("sass/*.scss", gulp.series("sass"));
  gulp.watch('js/*.js', gulp.series('scripts'));
  done();
});

// Load browsersync
gulp.task("browser-sync", function (done) {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp
    .watch("build/css/*.css")
    .on('change', browserSync.reload);

  done();
});

gulp.task("scripts", function(){
  return gulp
  .src()
}

// Default task
gulp.task('default', gulp.parallel('browser-sync', 'watch'));

/*

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('default', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

/*
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src('js/*js')
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});

// use default task to launch Browsersync and watch JS files
gulp.task('default', ['js'], function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("js/*.js", ['js-watch']);
});

/*
gulp.task("default", function() {
  var gulp        = require('gulp');
  var browserSync = require('browser-sync').create();
 



  gulp.task("watch", function() {
    gulp.watch("build/js/*.js", gulp.series("scripts"));
  });
  
  

  // Static server
  gulp.task('browser-sync', function() {
      browserSync.init({
          server: {
              baseDir: "./"
            }
      });
;})
;} 

  

  /*
  gulp.task('browser-sync', function() {
      browserSync.init({
          proxy: "yourlocal.dev"
      });
  });
}

*/

/*
const gulp = require("gulp"); // Load Gulp!
// Now that we've installed the terser package we can require it:
const terser = require("gulp-terser"),
  rename = require("gulp-rename");
gulp.task("default", function() {
  return gulp
    .src("./js/*.js") // What files do we want gulp to consume?
    .pipe(terser()) // Call the terser function on these files
    .pipe(rename({ extname: ".min.js" })) // Rename the uglified file
    .pipe(gulp.dest("./build/js")); // Where do we put the result?
}); */

/*
  const gulp = require('gulp'),
  terser = require('gulp-terser'),
  rename = require('gulp-rename');
gulp.task('scripts', function(){
return gulp.src('./js/*.js')
  .pipe(terser())
  .pipe(rename({ extname: '.min.js' }))
  .pipe(gulp.dest('./build/js'))
});

gulp.task('say_hello', function(done) {
    console.log('Hello!');
  done();
});

gulp.task('default', gulp.parallel('say_hello', 'scripts'));



gulp.task("watch", function() {
  gulp.watch("js/*.js", gulp.series("scripts"));
}); 

*/ 
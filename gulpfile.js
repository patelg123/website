'use strict';

var gulp            = require('gulp');
var autoprefixer    = require('gulp-autoprefixer');
var csso            = require('gulp-csso');
var rename          = require('gulp-rename');
var watch           = require('gulp-watch');


// Set the browser that you want to support
const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];


// Copy the html files to dist
gulp.task('copy_html', function () {
   return gulp.src('./*html')
    .pipe(gulp.dest('./dist'))
});

// Copy images to dist
gulp.task('copy_imgs', function () {
   return gulp.src('images/*')
    .pipe(gulp.dest('./dist/images'))
});


// Minify and auto prefix the CSS
gulp.task('minify_css', function () {
   return gulp.src('./style/main.css')
    // Auto-prefix css styles for cross browser compatibility
    .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    // Minify the file
    .pipe(csso())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./dist/style'))
});

gulp.task('watch', function() {
	gulp.watch('style/*.css', ['minify_css']);
    gulp.watch('*html', ['copy_html'])
});

gulp.task('default', ['minify_css', 'copy_html', 'watch', 'copy_imgs']);

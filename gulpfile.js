var gulp = require('gulp');

var rename = require("gulp-rename");
var template = require('gulp-template');
var webserver = require('gulp-webserver');

var cvData = require('./data/cv.json');
 
gulp.task('build', function ()
{
    return gulp.src('templates/cv.html')
        .pipe(template(cvData))
		.pipe(rename('index.html'))
        .pipe(gulp.dest('dist'));
});

gulp.task('serve', function() {
	gulp.src('dist')
		.pipe(webserver({
			livereload: true,
			directoryListing: false,
			open: true
		}));
});

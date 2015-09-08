var gulp = require('gulp');

var minifyHTML = require('gulp-minify-html');
var rename = require("gulp-rename");
var template = require('gulp-template');
var webserver = require('gulp-webserver');

var DATA = {
	cv: require('./data/cv.json')
};

function handleError(error) {
	console.error('' + error);
	this.emit('end');
}

gulp.task('build', function ()
{
    return gulp.src('templates/cv.html')
        .pipe(template(DATA.cv))
		.on('error', handleError)
		.pipe(minifyHTML())
		.on('error', handleError)
		.pipe(rename('index.html'))
        .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['build', 'watch'], function() 
{
	return gulp.src('dist')
		.pipe(webserver(
		{
			livereload: true,
			directoryListing: false,
			root: 'dist',
			open: true
		}));
});

gulp.task('watch', function()
{
	return gulp.watch(['data/*.json', 'templates/*.html'], ['build']);
});

gulp.task('default', ['serve']);
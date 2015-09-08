var gulp = require('gulp');

var data = require('gulp-data');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var rename = require("gulp-rename");
var template = require('gulp-template');
var webserver = require('gulp-webserver');

function handleError(error) {
	console.error('' + error);
	this.emit('end');
}

gulp.task('build', ['build:css', 'build:html']);

gulp.task('build:css', function ()
{
	return gulp.src('./src/less/*.less')
		.pipe(less({
			paths: ['./node_modules/']
		}))
		.on('error', handleError)
		.pipe(minifyCSS())
		.on('error', handleError)
		.pipe(gulp.dest('dist/css'));
});

gulp.task('build:html', function ()
{
    return gulp.src('./src/templates/cv.html')
		.pipe(data(function() {
			return require('./src/data/cv.json');
		}))
        .pipe(template())
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
	gulp.watch(['./src/data/*.json', './src/templates/*.html'], ['build:html']);
	gulp.watch(['./src/less/*.less'], ['build:css']);
});

gulp.task('default', ['serve']);
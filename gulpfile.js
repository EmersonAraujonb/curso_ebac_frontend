const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const obfuscate = require('gulp-obfuscate');
const uglify = require('gulp-uglify');


function comprimeImages() { // Compress images
    return gulp.src('./source/images/*')  // Source directory for images
        .pipe(imagemin())   // Compress images using imagemin
        .pipe(gulp.dest('./build/images')); // Destination directory for compressed images
}

function comprimeJavaScript() { // Compress JavaScript files
    return gulp.src('./source/scripts/*.js')  // Source directory for JavaScript files
        .pipe(uglify())  // Minify JavaScript files using uglify
        .pipe(obfuscate())  // Obfuscate JavaScript files
        .pipe(gulp.dest('./build/scripts')); // Destination directory for compressed JavaScript files
}

function compileSass() { // Compile Sass files  
        return gulp.src('./source/styles/main.scss') // Source directory for Sass files
        .pipe(sourcemaps.init()) // Initialize sourcemaps
        .pipe(sass({ 
                outputStyle: 'compressed' 
            })) // Compile Sass to CSS with compressed output
        .pipe(sourcemaps.write('./maps')) // Write sourcemaps;
        .pipe(gulp.dest('./build/styles')); // Destination directory for compiled CSS files
}

exports.default = function() { // Default task
        gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compileSass)); // Watch for changes in Sass files
        gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJavaScript)); // Watch for changes in JavaScript files
        gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImages)); // Watch for changes in images
    }
// REQUIRED

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    plumber  = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    del = require('del');

// TASKS

    // Scripts Task
        gulp.task('scripts', function() {
            gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
            .pipe(rename({suffix:'.min'}))
            .pipe(uglify())
            .pipe(gulp.dest('app/js'));
        })

    // Sass Task
        gulp.task('sass', function() {
            return gulp.src('app/scss/**/*.scss')
                .pipe(sass().on('error', sass.logError))
                .pipe(gulp.dest('app/css'));
        });

// WATCH TASK

    gulp.task('watch', function(){
        gulp.watch('app/js/**/*.js', ['scripts']);
        gulp.watch('app/scss/**/*.scss', ['sass', 'scripts']);
    });

// DEFAULT TASK

    gulp.task('default', ['scripts', 'watch', 'sass']);

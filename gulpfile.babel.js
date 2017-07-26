const gulp = require('gulp')
const server = require('browser-sync').create()
const $ = require('gulp-load-plugins')()
const path = require('path')
const config = require('./config')

gulp.task('server', ['sass'], () => {
  server.init({
    server: {
      baseDir: config.gulp.rootDir
    }
  })

  gulp.watch(config.gulp.sassFiles, ['sass'])
  gulp.watch([
    config.gulp.rootFiles,
    config.gulp.jsFiles,
    config.gulp.cssFiles,
    config.gulp.imgFiles
  ]).on('change', server.reload)
})

gulp.task('sass', () => {
  gulp.src(config.gulp.sassFiles)
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .pipe($.autoprefixer({
      browsers: ['> 1%', 'IE 8'],
      cascade: false
    }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(config.gulp.cssDir))
    .pipe($.rename({
      extname: '.min.css'
    }))
    .pipe($.csso())
    .pipe(gulp.dest(config.gulp.cssDir))
    .pipe(server.stream())
})

gulp.task('usemin', () => {
  gulp.src([config.gulp.rootFiles, config.gulp.pageFiles])
    .pipe($.useref())
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.csso()))
    .pipe(gulp.dest(config.dist))
})

gulp.task('clean', () => {
  gulp.src(path.resolve(config.dist, '**/*.*'))
    .pipe($.clean());
})

gulp.task('imagemin', () => {
  gulp.src(config.gulp.imgFiles)
    .pipe($.imagemin())
    .pipe(gulp.dest(path.resolve(config.dist, 'assets/images')))
})

gulp.task('buildServer', ['clean', 'usemin', 'imagemin'], () => {
  server.init({
    port: 3030,
    server: {
      baseDir: config.dist
    }
  })
})

gulp.task('default', ['server'])

gulp.task('build', ['buildServer'])
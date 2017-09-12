const gulp = require('gulp');
const server = require('browser-sync').create();
const $ = require('gulp-load-plugins')();
const config = require('./config');
// const del = require('del')
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack/webpack.config');
const webpack = require('webpack');
const path = require('path');

gulp.task('server', ['sass'], () => {
  server.init({
    server: {
      baseDir: config.gulp.rootDir,
    },
  });

  gulp.watch(config.gulp.sassFiles, ['sass']);
  gulp.watch(config.gulp.jsSrcFiles, ['babel']);
  gulp.watch([
    config.gulp.rootFiles,
    config.gulp.pageFiles,
    config.gulp.jsFiles,
    config.gulp.cssFiles,
    config.gulp.imgFiles,
  ]).on('change', server.reload);
});

// 编译sass
gulp.task('sass', () => gulp.src(config.gulp.sassFiles)
  .pipe($.plumber())
  .pipe($.sourcemaps.init())
  .pipe($.sass())
  .pipe($.autoprefixer({
    browsers: ['> 1%', 'IE 8'],
    cascade: false,
  }))
  .pipe($.sourcemaps.write())
  .pipe(gulp.dest(config.gulp.cssDir))
  .pipe($.rename({
    extname: '.min.css',
  }))
  .pipe($.csso())
  .pipe(gulp.dest(config.gulp.cssDir))
  .pipe(server.stream()));

// 编译js
gulp.task('babel', () => {
  gulp.src(config.gulp.jsSrcFiles)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.babel({
      presets: ['env'],
    }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(config.gulp.jsDir))
    .pipe(server.stream());
});

// md5 给html下的js, css 增加hash
gulp.task('md5_css', () => {
  gulp.src(config.dist.cssFiles)
    .pipe($.plumber())
    .pipe($.md5Plus(10, [config.dist.rootFiles]))
    .pipe(gulp.dest(config.dist.cssDir));
});

gulp.task('md5_js', () => {
  gulp.src(config.dist.jsFiles)
    .pipe($.plumber())
    .pipe($.md5Plus(10, [config.dist.rootFiles]))
    .pipe(gulp.dest(config.dist.jsDir));
});

gulp.task('md5_img', () => {
  gulp.src(config.dist.imgFiles)
    .pipe($.plumber())
    .pipe($.md5Plus(10, [config.dist.rootFiles]))
    .pipe(gulp.dest(config.dist.imgDir));
});

gulp.task('md5', ['usemin'], () => {
  gulp.start(['md5_css', 'md5_js', 'md5_img']);
});

// 合并js, css文件
gulp.task('usemin', ['clean'], () => gulp.src([config.gulp.rootFiles, config.gulp.pageFiles])
  .pipe($.plumber())
  .pipe($.useref())
  .pipe($.if('*.js', $.uglify()))
  .pipe($.if('*.css', $.csso()))
  .pipe(gulp.dest(config.dist.rootDir)));

gulp.task('clean', () => gulp.src([config.dist.rootDir])
  .pipe($.clean()));

gulp.task('imagemin', () => {
  gulp.src(config.gulp.imgFiles)
    .pipe($.plumber())
    .pipe($.imagemin())
    .pipe(gulp.dest(config.dist.imgDir));
});

gulp.task('buildServer', ['imagemin', 'md5'], () => {
  server.init({
    port: 3030,
    server: {
      baseDir: config.dist.rootDir,
    },
  });
});

gulp.task('default', ['server']);

gulp.task('build', ['buildServer']);

/* gulp webpack */
gulp.task('gWebpack', ['webpack'], () => {
  server.init({
    server: {
      baseDir: config.build.rootDir,
    },
  });

  gulp.watch(config.webpack.srcFiles, ['webpack']);
  gulp.watch([
    config.build.allFiles,
  ]).on('change', server.reload);
});

gulp.task('webpack', () => gulp.src('./src/index.js')
  .pipe(webpackStream(webpackConfig, webpack)) // webpack@3
  .pipe(gulp.dest(path.join(config.build.rootDir, 'js/'))));

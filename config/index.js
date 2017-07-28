const path = require('path')
module.exports = {
  build: path.resolve(__dirname, '../build'),
  dist: {
    rootDir: path.resolve(__dirname, '../dist'),
    cssDir: path.resolve(__dirname, '../dist/assets/css'),
    jsDir: path.resolve(__dirname, '../dist/assets/js'),
    imgDir: path.resolve(__dirname, '../dist/assets/images'),
    rootFiles: path.resolve(__dirname, '../dist/*.*'),
    cssFiles: path.resolve(__dirname, '../dist/assets/css/*.css'),
    jsFiles: path.resolve(__dirname, '../dist/assets/js/*.js'),
    imgFiles: path.resolve(__dirname, '../dist/assets/images/*.*'),
  },
  gulp: {
    rootDir: path.resolve(__dirname, '../examples'),
    cssDir: path.resolve(__dirname, '../examples/assets/css'),
    imgDir: path.resolve(__dirname, '../examples/assets/images'),
    jsDir: path.resolve(__dirname, '../examples/assets/js'),
    rootFiles: path.resolve(__dirname, '../examples', '*.html'),
    pageFiles: path.resolve(__dirname, '../examples/pages', '*.*'),
    cssFiles: path.resolve(__dirname, '../examples/assets/css', '*.css'),
    sassFiles: path.resolve(__dirname, '../examples/assets/sass', '*.scss'),
    jsFiles: path.resolve(__dirname, '../examples/assets/js', '*.js'),
    jsSrcFiles: path.resolve(__dirname, '../examples/src/js', '*.js'),
    imgFiles: path.resolve(__dirname, '../examples/assets/images', '*.*')
  }
}
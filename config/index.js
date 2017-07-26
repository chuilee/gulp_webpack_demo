const path = require('path')
module.exports = {
  dist: path.resolve(__dirname, '../dist'),
  build: path.resolve(__dirname, '../build'),
  gulp: {
    rootDir: path.resolve(__dirname, '../examples'),
    cssDir: path.resolve(__dirname, '../examples/assets/css'),
    imgDir: path.resolve(__dirname, '../examples/assets/images'),
    rootFiles: path.resolve(__dirname, '../examples', '*.html'),
    pageFiles: path.resolve(__dirname, '../examples/pages', '*.html'),
    cssFiles: path.resolve(__dirname, '../examples/assets/css', '*.css'),
    sassFiles: path.resolve(__dirname, '../examples/assets/sass', '*.scss'),
    jsFiles: path.resolve(__dirname, '../examples/assets/js', '*.js'),
    imgFiles: path.resolve(__dirname, '../examples/assets/images', '*.*')
  }
}
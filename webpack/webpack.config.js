const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')

module.exports = {
  devtool: 'hidden-source-map',
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, '../build/js')
  },
  module: {
    noParse: function (content) {
      return /jquery|lodash/.test(content);
    },
    rules: [{
      test: /\.jsx?$/,
      use: ['babel-loader']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: '../index.html',
      template: 'src/templates/index.html',
      minify: {
        minifyJS: true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new HtmlWebpackHarddiskPlugin()
  ]
}
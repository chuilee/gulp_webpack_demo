const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devtool: 'hidden-source-map',
  entry: {
    index: path.resolve(__dirname, '../src/index.js'),
    page: path.resolve(__dirname, '../src/page.js'),
  },
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, '../build/js/'),
  },
  module: {
    noParse(content) {
      return /jquery|loadsh/.test(content);
    },
    rules: [{
      test: /\.jsx?$/,
      use: ['babel-loader'],
    }, {
      test: /\.pug$/,
      use: ['pug-loader'],
    }, {
      test: /\.(jpe?g|png|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[hash:7].[ext]',
        },
      }],
    }],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.[hash:8].js',
      chunks: ['index', 'page'],
    }),
    new HtmlWebpackPlugin({
      chunks: ['common', 'index'],
      title: 'My App',
      filename: '../index.html',
      template: 'src/templates/main.pug',
      minify: {
        minifyJS: true,
      },
    }),
    new HtmlWebpackPlugin({
      chunks: ['common', 'page'],
      title: 'page-My App',
      filename: '../page.html',
      template: 'src/templates/page.html',
      minify: {
        minifyJS: true,
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
  ],
};

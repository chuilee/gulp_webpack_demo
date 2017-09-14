const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    index: path.resolve(__dirname, '../src/index.js'),
    page: path.resolve(__dirname, '../src/page.js'),
  },
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, '../build'),
  },
  module: {
    noParse(content) {
      return /jquery/.test(content);
    },
    rules: [{
      test: /\.jsx?$/,
      use: ['babel-loader'],
    }, {
      enforce: 'pre',
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      options: {
        configFile: path.resolve(__dirname, '../.eslintrc'),
      },
    }, {
      test: /\.pug$/,
      use: ['pug-loader'],
    }],
  },
  devServer: {
    hot: true, // 告诉 dev-server 我们在使用 HMR
    contentBase: path.resolve(__dirname, '../build'),
    compress: true,
    inline: true,
    publicPath: '/',
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 3000,
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.[hash:8].js',
      // minChunks: 3,
      // (Modules must be shared between 3 entries)
      chunks: ['index', 'page'],
    }),
    new webpack.HotModuleReplacementPlugin(), // 启用 HMR
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      chunks: ['common', 'index'],
      // hash: true,  
      // 会给所有chunks js文件加上hash 例如:common.js?6bac23b8e7535c76edcf(这个不会经常变动,无需每次加上)
      title: 'index-My App',
      filename: 'index.html',
      template: 'src/templates/main.pug',
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      chunks: ['common', 'page'],
      // hash: true,
      title: 'page-My App',
      filename: 'page.html',
      template: 'src/templates/page.html',
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],
};
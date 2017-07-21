const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, '../build')
  },
  module: {
    noParse: function (content) {
      return /jquery/.test(content);
    },
    rules: [{
      test: /\.jsx?$/,
      use: ['babel-loader']
    }]
  },
  devServer: {
    hot: true, // 告诉 dev-server 我们在使用 HMR
    contentBase: path.resolve(__dirname, '../build'),
    compress: true,
    publicPath: '/',
    disableHostCheck: true, // 禁用检查ip跟host一致
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 启用 HMR
    new HtmlWebpackPlugin({
      title: 'My App'
    })
  ]
}
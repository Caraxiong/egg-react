
const merge = require('webpack-merge')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const indexPath = path.resolve(__dirname,'../src/index.html')

module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    }]
  },
  plugins:[
    new webpack.BannerPlugin("Copyright Caraxiong"),
    new HtmlWebpackPlugin({
        template: indexPath
    }),
    // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(), //压缩JS代码
    new ExtractTextPlugin("[name]-[hash].css"), //分离CSS和JS文件
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
})
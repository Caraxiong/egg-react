
const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const config = require('../config')
const entryPath = path.resolve(__dirname,'../src/app.js')
const outPath = path.resolve(__dirname,'./../../app/view/public')

module.exports = merge(baseWebpackConfig, {
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
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
        template: config.build.index
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
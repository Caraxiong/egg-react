
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
    //通过将公共模块拆出来，最终合成的文件能够在最开始的时候加载一次，便存起来到缓存中供后续使用。这个带来速度上的提升，因为浏览器会迅速将公共的代码从缓存中取出来，而不是每次访问一个新页面时，再去加载一个更大的文件。
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'commons', //公共chunk的名称
    //   filename: 'commons.js', //公共chunk的文件名
    // }),
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
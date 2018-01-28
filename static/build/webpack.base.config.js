const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const config = require('../config')
const entryPath = path.resolve(__dirname,'../src/app.js')

// const ExtractTextPlugin = require('extract-text-webpack-plugin')
console.log('process.env.NODE_ENV',process.env.NODE_ENV)
module.exports = {
  entry: entryPath, //已多次提及的唯一入口文件
  output: {
    path: config.build.assetsRoot, //打包后的文件存放的地方
    filename:process.env.NODE_ENV === 'production' ? 'public/js/[name].[chunkhash].js' : 'public/js/[name].js', //打包后输出文件的文件名
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath //资源的发布地址,线上
  },
  module: {
    loaders: [{
        test: /\.json$/,
        loader: "json-loader"
    }, {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader'
    }, {
        test: /\.(png|jpg|svg)$/, //通过 name 字段来指定图片打包的目录与文件名
        loader: 'url-loader?limit=8192&name=[path][name].[ext]&outputPath=img/&publicPath=output/'
    }, {
        test: /\.html$/, //在 bundle.js 中引用 html 文件，import '../index.html';这样 html 文件中的图片就可以被打包进 bundle 文件夹里了。
        loader: 'html-withimg-loader'
    }]
  },
  plugins: [
    new webpack.BannerPlugin("Copyright Caraxiong"),
  ]
}
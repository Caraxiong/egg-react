
const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const indexPath = path.resolve(__dirname,'../src/index.html')
const entryPath = path.resolve(__dirname,'../src/app.js')
const outPath = path.resolve(__dirname,'./../../app/view/public')

module.exports = merge({
  entry: entryPath, //已多次提及的唯一入口文件
  output: {
    path: outPath, //打包后的文件存放的地方
    filename: 'public/js/bundle.js', //打包后输出文件的文件名
    publicPath: './' //资源的发布地址
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
  }
}, {
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

const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config')
const path = require('path')
const config = require('../config')
const entryPath = path.resolve(__dirname,'../src/app.js')
const outPath = path.resolve(__dirname,'./../../app/view/public')

module.exports = merge(baseWebpackConfig, {
      devtool: config.dev.devtool, 
      module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              plugins: [
                ["react-transform", {
                  transforms: [{
                    transform: "react-transform-hmr",
                    imports: ["react"],
                    locals: ["module"]
                  }]
                }]
              ]
            }
        }]
      },
      plugins: [
        new webpack.BannerPlugin("Copyright Caraxiong"),
        new HtmlWebpackPlugin({
            template: config.dev.index
        }),
        new webpack.HotModuleReplacementPlugin(), //热加载
        new webpack.DefinePlugin({
          'process.env': require('../config/dev.env')
        }),
      ],
      devServer: {
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        port: "8087", //设置默认监听端口，如果省略，默认为”8080“
        // colors:true,        //终端中输出结果为彩色
        historyApiFallback: true, //这个配置属性是用来应对返回404页面时定向到特定页面用的    在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true, //实时刷新
        host: '127.0.0.1', //服务器主机号
        overlay: true, //用来在编译出错的时候，在浏览器页面上显示错误
        stats: 'errors-only', //控制编译的时候shell上的输出内容   "errors-only"表示只打印错误
        quiet: false, //当这个配置属性和devServer.stats属于同一类型的配置属性   当它被设置为true的时候，控制台只输出第一次编译的信息，当你保存后再次编译的时候不会输出任何内容，包括错误和警告
        compress: false,// 设置为true的时候对所有的服务器资源采用gzip压缩   采用gzip压缩的优点和缺点：优点：对JS，CSS资源的压缩率很高，可以极大得提高文件传输的速率，从而提升web性能  缺点：服务端要对文件进行压缩，而客户端要进行解压，增加了两边的负载
      }
  }
)

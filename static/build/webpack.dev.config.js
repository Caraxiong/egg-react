
const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config');
const path = require('path')
const indexPath = path.resolve(__dirname,'../src/index.html')
module.exports = merge(baseWebpackConfig, {
  devtool: 'eval-source-map', 
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
        template: indexPath
    }),
    new webpack.HotModuleReplacementPlugin(), //热加载
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
  ],
  devServer: {
      contentBase: "./public", //本地服务器所加载的页面所在的目录
      port: "8087", //设置默认监听端口，如果省略，默认为”8080“
      // colors:true,        //终端中输出结果为彩色
      historyApiFallback: true, //不跳转  在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
      inline: true //实时刷新
  }
})
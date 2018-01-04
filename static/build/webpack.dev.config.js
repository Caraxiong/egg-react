
const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const indexPath = path.resolve(__dirname,'../src/index.html')
const entryPath = path.resolve(__dirname,'../src/app.js')
const outPath = path.resolve(__dirname,'../src/public')

module.exports = merge({
  entry: entryPath, //已多次提及的唯一入口文件
  output: {
      path: outPath, //打包后的文件存放的地方
      filename: "bundle.js", //打包后输出文件的文件名
      publicPath: '/' //资源的发布地址
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
    }}, {
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
  }
)

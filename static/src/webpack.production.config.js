const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: __dirname + "/app/app.js",  //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",  //打包后的文件存放的地方
        filename: "[name]-[hash].js"   //打包后输出文件的文件名
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            },
            {
                test: /\.json$/,
                loader:"json-loader"
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules!postcss-loader')
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader?modules!postcss-loader!sass-loader'
            }
        ]
    },
    // postcss: [
    //     require('autoprefixer')//调用autoprefixer插件
    // ],
    plugins:[
        new webpack.BannerPlugin("Copyright Caraxiong"),
        new HtmlWebpackPlugin({
            template: __dirname + "/index.html"
        }),
        // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(), //压缩JS代码
        new ExtractTextPlugin("[name]-[hash].css") //分离CSS和JS文件
    ]
}

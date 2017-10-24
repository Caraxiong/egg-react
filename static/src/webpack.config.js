const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    devtool:'eval-source-map',
    entry: __dirname + "/app/app.js",  //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",  //打包后的文件存放的地方
        filename: "bundle.js"   //打包后输出文件的文件名
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
                test: /\.scss$/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader'
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
        new webpack.HotModuleReplacementPlugin()  //热加载
    ],
    devServer: {
        contentBase: "./public",        //本地服务器所加载的页面所在的目录
        port: "8080",       //设置默认监听端口，如果省略，默认为”8080“
        // colors:true,        //终端中输出结果为彩色
        historyApiFallback: true,       //不跳转  在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true        //实时刷新
    }
}

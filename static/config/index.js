'use strict'

const path = require('path')

module.exports = {
  dev: {
    // paths
    assetsSubDirectory: 'static', //静态文件拷贝路径
    assetsPublicPath:'/', //publicPath  线上发布之后，通过路径访问的路径地址
    proxyTable: {}, //http-proxy解决跨域问题，配置代理

    host:'localhost',
    port: 8087,
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,

    useEslint: true,
    showEslintErrorsInOverlay: false,

    devtool:'cheap-module-eval-source-map',
    cacheBusting: true,
    cssSourceMap: true,
    index: path.resolve(__dirname,'../src/index.html'), //index.html文件地址
  },
  build: {
    index: path.resolve(__dirname,'../src/index.html'), //index.html文件地址

    //paths
    assetsRoot: path.resolve(__dirname,'../src/public'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    productionSourceMap: true,
    devtool: '#source-map',

    productionGzip: false,
    productionGzipExtensions: ['js','css'],
    
  }
}

'use strict'
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin') //用来将css提取到单独的css文件中
const packageConfig = require('../package.json')

exports.assetsPath = function(_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'? config.build.assetsSubDirectory : config.dev.assetsSubDirectory
  // path.join和path.posix.join的区别就是，前者返回的是完整的路径，后者返回的是完整路径的相对根路径
  // 也就是说path.join的路径是C:a/a/b/xiangmu/b，那么path.posix.join就是b
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function(options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      //是否开启cssmap，默认是false
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }
  //loader生成器
  function generateLoaders(loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]
    if(loader){
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({},loaderOptions, {
          sourceMap:options.sourceMap
        })
      })
    }
  }
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass',{ indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

exports.styleLoaders = function(options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for(const extension in loaders){
    const loader = loaders[extension]
    output.push({
      test:new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')  //命令行提示功能
  return (severity, errors) => {
    if(severity !== 'error') return 

    const error = errors[0]
    const filename = error.file && error.file.split('!')
    
    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || ''
    })
  }
}
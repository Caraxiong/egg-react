const path = require('path')

let date = new Date
date.setDate(date.getDate()+7)

exports.keys = 'UserName=Cara;expires='+date

exports.view = {
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.html',
    mapping: {
        '.html': 'nunjucks'
    }
}

exports.middleware = [
    'apiWrapper'
];
exports.security = {
    ignore: '',
    domainWhiteList: ['http://192.168.0.109:7001'],
    methodnoallow: {enable: false },
    csrf: {
      enable: false,
      ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    },
  };
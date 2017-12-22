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

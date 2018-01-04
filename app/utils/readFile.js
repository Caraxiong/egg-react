const dealFn = require('./dealfn');

let readFile = (name,query,res) => {
    let promise = new Promise((resolve, reject) => {
        let fileName = query + '_'+ name  + '.json'
        let sendData = {};
        dealFn.readFileData(fileName).then((data) => {
            sendData.data = data;
            
            resolve(JSON.stringify(sendData.data));
        }, (msg) => {
            sendData.errno = -1;
            sendData.msg = '暂时没有数据';
            return reject(JSON.stringify(sendData.data));
        })
    })
    return promise
}

module.exports = readFile
const dealFn = require('./dealfn');

let readFile = (name,query,res) => {
    let fileName = query + '_'+ name  + '.json'
    let sendData = {};
    dealFn.readFileData(fileName).then((data) => {
        console.log(data)
        sendData.data = data;
        return JSON.stringify(sendData.data);
    }, (msg) => {
        sendData.errno = -1;
        sendData.msg = '暂时没有数据';
        return JSON.stringify(sendData.data);
    })
}

module.exports = readFile
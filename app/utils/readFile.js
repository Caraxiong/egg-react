const dealFn = require('./dealfn');

let readFile = (name,query,isNeedCity) => {
    let promise = new Promise((resolve, reject) => {
        let fileName 
        if(isNeedCity){
          fileName = query + '_'+ name  + '.json'
        } else{
          fileName = name + '.json'
        }
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
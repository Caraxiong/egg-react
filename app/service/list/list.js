const Service = require('egg').Service;
const readFile = require('../../utils/readFile');

class ListService extends Service {
    async getList(cityStr) {
        const list = await readFile('cinema', cityStr);
        console.log('Service',list)
        return list
    }
}
module.exports = ListService
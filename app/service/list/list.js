const Service = require('egg').Service;
const readFile = require('../../utils/readFile');

class ListService extends Service {
    async getList(cityStr) {
        const list = await readFile('cinema', cityStr);
        return list
    }
    async getDetail(id) {
        const list = await readFile('cinema', id);
        return list
    }
}
module.exports = ListService
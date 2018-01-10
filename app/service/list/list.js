const Service = require('egg').Service;
const readFile = require('../../utils/readFile');

class ListService extends Service {
    async getList(cityStr) {
        const list = await readFile('cinema', cityStr, true);
        return list
    }
    async getDetail(id) {
        const list = await readFile('cinema', id, true);
        return list
    }
    async getMovieDetail() {
      const list = await readFile('cinema_detail', '', false);
      return list
  }
}
module.exports = ListService
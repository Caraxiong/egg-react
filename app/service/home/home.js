const Service = require('egg').Service;
const readFile = require('../../utils/readFile');

class HomeService extends Service {
  async getImgs(){
    const imgs = await readFile('swiper','',false);
    return imgs
  }
}

module.exports = HomeService
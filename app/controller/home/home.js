const Controller = require('egg').Controller;

class HomeController extends Controller {
  async getImgs() {
    const { ctx } = this;
    const imgs = await ctx.service.home.home.getImgs();
    ctx.body = imgs
  }
}

module.exports = HomeController

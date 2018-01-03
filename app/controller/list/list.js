const Controller = require('egg').Controller;
class ListController extends Controller {
  async getList() {
    const { ctx } = this;
    const cityStr = ctx.params.cityStr;
    const list = await ctx.service.list.list.getList(cityStr);
    console.log(list)
    ctx.body = list
  }
}
module.exports = ListController
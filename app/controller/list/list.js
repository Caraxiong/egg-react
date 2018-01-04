const Controller = require('egg').Controller;
class ListController extends Controller {
  async getList() {
    const { ctx } = this;
    const cityStr = ctx.params.cityStr;
    const list = await ctx.service.list.list.getList(cityStr);
    ctx.body = list
  }
  async getDetail() {
    const { ctx } = this;
    const id = ctx.params.id;
    const list = await ctx.service.list.list.getDetail(id);
    ctx.body = list
  }
}
module.exports = ListController

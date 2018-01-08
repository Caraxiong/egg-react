// 当 CSRF token 存储在 Cookie 中时，一旦在同一个浏览器上发生用户切换，新登陆的用户将会依旧使用旧的 token（之前用户使用的），这会带来一定的安全风险，因此在每次用户登陆的时候都必须刷新 CSRF token。
exports.login = function* (ctx) {
  const { username, password } = ctx.request.body;
  const user = yield ctx.service.user.find({ username, password });
  if (!user) ctx.throw(403);
  ctx.session = { user };

  // 调用 rotateCsrfSecret 刷新用户的 CSRF token
  ctx.rotateCsrfSecret();

  ctx.body = { success: true };
}
// 中间件
// Logger 功能
const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
  ctx.response.body = 'Hello Koa !!!!';
};

app.use(main);
app.listen(3000);

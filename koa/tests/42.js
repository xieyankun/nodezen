// 错误处理
// 404 错误
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    ctx.response.status = 404;
    ctx.response.body = '404 page not Found'
};

app.use(main);
app.listen(3000);

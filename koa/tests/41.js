// 错误处理
// 500 错误 代码运行过程中发生错误
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    ctx.throw(500)
};

app.use(main);
app.listen(3000);

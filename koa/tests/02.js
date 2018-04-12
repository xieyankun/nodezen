// 返回内容
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    ctx.response.body = "Hello world!";
}
/*
* ctx.response   HTTP Response
* ctx.request    HTTP Request
*/

app.use(main);

app.listen(3000);
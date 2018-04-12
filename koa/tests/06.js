// koa-route 模块路由
const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

const about = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">this is about page</a>';
}

const main = ctx => {
    ctx.response.body = "Hello Koa!!!!";
}

app.use(route.get('/', main));
app.use(route.get('/about', about));

app.listen(3000);

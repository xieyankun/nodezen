// 重定向 redirect
const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

const redirect = ctx => {
    ctx.response.redirect('/');
};

const main = ctx => {
    ctx.response.body = "Hello Koa!!!!";
};

app.use(route.get('/', main));
app.use(route.get('/redirect', redirect));

app.listen(3000);


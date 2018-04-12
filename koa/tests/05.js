// 路由
const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    if (ctx.request.path !== '/') {
        ctx.response.type = 'html';
        ctx.response.body = '<a href="/">Index page</a>';
    }else{
        ctx.response.type = 'html';
        ctx.response.body = fs.createReadStream('./tests/template.html');
        // ctx.response.body = 'Hello World';
    }
};

app.use(main);
app.listen(3000);
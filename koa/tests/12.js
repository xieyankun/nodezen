// 静态资源
const fs = require('fs');
const Koa = require('koa');
const rotue = require('koa-route');
const app = new Koa();
const path = require('path');
const serve = require('koa-static');

const main = serve(path.join(__dirname));

const about = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = fs.createReadStream('./tests/template.html');
};

app.use(main);
app.use(rotue.get('/about', about));
app.listen(3000);

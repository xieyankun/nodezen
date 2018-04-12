// 中间件栈
// 多个中间件会形成一个栈结构（middle stack），以"先进后出"（first-in-last-out）的顺序执行。
const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

const one = (ctx, next) => {
    console.log('>> one')
    next();
    console.log('<< one')
}

const two = (ctx, next) => {
  console.log('>> two');
  next(); 
  // console.log('<< two');
}

const three = (ctx, next) => {
  console.log('>> three');
  next();
  console.log('<< three');
}

const main = ctx => {
    ctx.response.body = 'Hello World';
};

app.use(one);
app.use(two);
app.use(three);
app.use(main);
app.listen(3000);

/*
如果中间件内部没有调用next函数，那么执行权就不会传递下去
*/
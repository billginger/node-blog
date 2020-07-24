import Koa from 'koa';

const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello NodeBlog!';
});

app.listen(3000);

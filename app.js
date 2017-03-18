require('babel-register');
const Koa   = require('koa');
const app   = new Koa();

const index = require('./routes/index');

app
    .use(index.routes())
    .use(index.allowedMethods());


app.listen(8081);
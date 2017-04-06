const Koa   = require('koa');
const views = require('koa-views');

const app   = new Koa();

const index = require('./routes/index');

app
    .use(views(__dirname + '/views', {
        map: {
            html: 'ejs'
        }
    }))
    .use(index.routes())
    .use(index.allowedMethods());


app.listen(5000);
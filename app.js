require('babel-register');
require('babel-polyfill');
const Koa        = require('koa');
const views      = require('koa-views');
const connection = require('./data/connection');
const bodyParser = require('koa-bodyparser');

const index     = require('./routes/index');
const customer  = require('./routes/customer');
const db        = require('./routes/db');

connection
    .authenticate()
    .then(()=> {
        console.log('Connection has been established successfully.');

        const app   = new Koa();
        app
            .use(bodyParser())
            .use(views(__dirname + '/views', {
                map: {
                    html: 'ejs'
                }
            }))
            .use(index.routes())
            .use(db.routes())
            .use(customer.routes())
            .use(index.allowedMethods())
            .use(db.allowedMethods());

        app.listen(5000);
    }).catch((err)=> {
        console.log('Unable to connect to the database:', err);
    });

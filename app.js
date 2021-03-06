require('babel-register');
require('babel-polyfill');
const Koa        = require('koa');
const views      = require('koa-views');
const connection = require('./data/connection');
const bodyParser = require('koa-bodyparser');

const index     = require('./routes/index');
const customer  = require('./routes/customer');
const movie     = require('./routes/movie');
const rating    = require('./routes/rating');
const cors      = require('kcors');
connection
    .authenticate()
    .then(()=> {
        console.log('Connection has been established successfully.');

        const app = new Koa();
        app
            .use(bodyParser())
            .use(views(__dirname + '/views', {
                map: {
                    html: 'ejs'
                }
            }))
            .use(cors())
            .use(index.routes())
            .use(customer.routes())
            .use(rating.routes())
            .use(movie.routes())
            .use(index.allowedMethods())
            .use(customer.allowedMethods())
            .use(rating.allowedMethods())
            .use(movie.allowedMethods());

        app.listen(5000);
    }).catch((err)=> {
        console.log('Unable to connect to the database:', err);
    });

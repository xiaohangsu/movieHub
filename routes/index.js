const CONFIG       = require('process').argv[2];
const Router       = require('koa-router');
const send         = require('koa-send');

let router         = new Router();

let STATIC_PATH = '';
if (CONFIG === 'dev') {
    STATIC_PATH = 'http://localhost:8080/';
} else if (CONFIG === 'dist') {
    STATIC_PATH = '/dist/';
}

router.get('/', (ctx, next)=> {
    return ctx.render('../views/index.html', {
    	staticPath: STATIC_PATH
    });
});


module.exports = router;
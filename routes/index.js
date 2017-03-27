const Router       = require('koa-router');
const send         = require('koa-send');

let router         = new Router();
router.get('/', (ctx, next)=> {
    return send(ctx, './index.html');
});


module.exports = router;
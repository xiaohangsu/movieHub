const router       = require('koa-router')();
const send         = require('koa-send');

router.get('/', function*(){
    yield send(this, './index.html');
});


module.exports = router;
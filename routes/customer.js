const Router    = require('koa-router');
const customer  = require('./../data/customer');
const Sequelize = require('sequelize');

let router = new Router();

router.post('/login', async (ctx, next)=> {
    ctx.body = await customer.findUser(ctx.request.body).then((instance)=> {
        console.log('Login: ', ctx.request.body.cuspassword, instance[0][0].cuspassword)
        if (ctx.request.body.cuspassword == instance[0][0].cuspassword) {
            return {
                status: 200,
                message: 'Success'
            }
        } else {
            return {
                status: 201,
                message: 'Failed'
            }
        }

    }).catch((err)=> {
        console.log('Login ERROR', err);
        return {
            status: 400,
            error: JSON.stringify(err)
        }
    });
});

router.post('/register', async (ctx, next)=> {
    ctx.body = await customer.addUser(ctx.request.body).then((instance, meta)=> {
        console.log('Add Customer Success: ', instance);
        return {
            status: 200,
            message: 'success'
        };
    }).catch((err) => {
        console.log('Add Customer Error: ', err.errors);
        return {
            status: 400,
            error: err.errors
        };
    });
});

module.exports = router;
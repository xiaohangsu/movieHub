const Router    = require('koa-router');
const customer  = require('./../data/customer');
const Sequelize = require('sequelize');
let router = new Router();

router.post('/db/addCustomer', async (ctx, next)=> {
    ctx.body = await customer.addUser(ctx.request.body).then((instance, meta)=> {
        console.log('Add Customer Success: ', instance);
        return {
            status: 200,
            message: 'Success'
        };
    }).catch((err) => {
        console.log('Add Customer Error: ', err.errors);
        return {
            status: 400,
            error: err.errors
        };
    });
});

router.post('/db/updateCustomerPassword', async (ctx, next)=> {
    ctx.body = await customer.updateUserPassword(ctx.request.body).then((instance)=> {
        console.log('Update Customer Password Success:', JSON.stringify(instance[0]));
        if (instance[0].affectedRows != 0 && instance[0].changedRows != 0) {
            return {
                status: 200,
                message: 'Success'
            };

        } else {
            return {
                status: 205,
                message: 'Unmatched Or same Password'
            }
        }
    }).catch((err)=> {
        console.log('Update Customer Password Failed: ', JSON.stringify(err));
        return {
            status: 400,
            error: err.errors
        }
    });
});

router.post('/db/deleteCustomer', async (ctx, next)=> {
    ctx.body = await customer.deleteUser(ctx.request.body).then((instance)=> {
        console.log('Delete Customer Success:', JSON.stringify(instance[0]));
        if (instance[0].affectedRows != 0) {
            return {
                status: 200,
                message: 'Success'
            };
        } else {
            return {
                status: 205,
                message: 'Unmatched'
            }
        }

    }).catch((err)=> {
        console.log('Delete Customer Failed: ', JSON.stringify(err));
        return {
            status: 400,
            message: err
        }
    });
});

router.post('/db/updateCustomerPortraitUrl', async (ctx, next)=> {
    ctx.body = await customer.updateUserPortraitUrl(ctx.request.body).then((instance)=> {
        console.log('Update Customer PortraitUrl Success:', JSON.stringify(instance[0]));
        if (instance[0].affectedRows != 0 && instance[0].changedRows != 0) {
            return {
                status: 200,
                message: 'Success'
            };

        } else {
            return {
                status: 205,
                message: 'Unmatched Or same Url'
            }
        }
    }).catch((err)=> {
        console.log('Update Customer PortraitUrl Failed: ', err);
        return {
            status: 400,
            error: err.errors
        }
    });
});

module.exports = router;
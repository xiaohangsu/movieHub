const Router    = require('koa-router');
const rating    = require('./../data/rating');

let router = new Router();

router.post('/db/addRating', async (ctx, next)=> {
    console.log('/db/addRating Request ', JSON.stringify(ctx.request.body));
    ctx.body = await rating.addRating(ctx.request.body).then((instance)=> {
        console.log('/db/addRating POST | Success: ', JSON.stringify(instance[0]));
        return {
            status: 200,
            message: 'Success'
        };
    }).catch((err)=> {
        console.log('/db/addRating POST | ERROR: ', JSON.stringify(err));
        return {
            status: 400,
            error: err
        };
    });
});

router.post('/db/deleteRating', async (ctx, next)=> {
    console.log('/db/deleteRating Request ', JSON.stringify(ctx.request.body));
    ctx.body = await rating.deleteRating(ctx.request.body).then((instance)=> {
        console.log('/db/deleteRating POST | Success: ', JSON.stringify(instance[0]));
        if (instance[0].affectedRows != 0) {
            return {
                status: 200,
                message: 'Success'
            };
        } else {
            return {
                status: 205,
                message: 'Unmatched'
            };
        }

    }).catch((err)=> {
        console.log('/db/deleteRating POST | ERROR: ', JSON.stringify(err));
        return {
            status: 400,
            error: err
        };
    });
});

router.post('/db/updateRating', async (ctx, next)=> {
    console.log('/db/updateRating Request ', JSON.stringify(ctx.request.body));
    ctx.body = await rating.updateRating(ctx.request.body).then((instance)=> {
        console.log('/db/updateRating POST | Success: ', JSON.stringify(instance[0]));
        if (instance[0].affectedRows != 0 && instance[0].changeRows != 0) {
            return {
                status: 200,
                message: 'Success'
            };
        } else {
            return {
                status: 205,
                message: 'Unmatched Or Still the same Rating'
            };
        }

    }).catch((err)=> {
        console.log('/db/updateRating POST | ERROR: ', JSON.stringify(err));
        return {
            status: 400,
            error: err
        };
    });
});

router.post('/db/groupRatingByMovie', async (ctx, next)=> {
    console.log('/db/groupRatingByMovie Request ', JSON.stringify(ctx.request.body));
    ctx.body = await rating.groupRatingByMovie(ctx.request.body).then((instance)=> {
        console.log('/db/groupRatingByMovie POST | Success: ', JSON.stringify(instance[0]));
        return {
            status: 200,
            message: 'Success'
        };
    }).catch((err)=> {
        console.log('/db/groupStarByMovie POST | ERROR: ', JSON.stringify(err));
        return {
            status: 400,
            error: err
        };
    });
});



module.exports = router;
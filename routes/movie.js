const Router    = require('koa-router');
const movie     = require('./../data/movie');

let router = new Router();

router.post('/db/addMovie', async (ctx, next)=> {
    ctx.body = await movie.addMovie(ctx.request.body).then((instance, meta)=> {
        console.log('/db/addMovie POST | Success: ', JSON.stringify(instance[0]));
        return {
            status: 200,
            message: 'Success'
        };
    }).catch(function (err) {
        console.log('/db/addMovie POST | Error: ', JSON.stringify(err));
        return {
            status: 400,
            error: err
        }
    });
});

router.post('/db/findMovie', async (ctx, next)=> {
    ctx.body = await movie.findMovie(ctx.request.body).then((instance, meta)=> {
        console.log('/db/findMovie POST | Success: ', JSON.stringify(instance[0]));
        return {
            status: 200,
            instance: instance[0],
            message: 'Success'
        };
    }).catch(function (err) {
        console.log('/db/findMovie POST | Error: ', JSON.stringify(err));
        return {
            status: 400,
            error: err
        }
    });
});

router.post('/db/deleteMovie', async (ctx, next)=> {
    ctx.body = await movie.deleteMovie(ctx.request.body).then((instance)=> {
        console.log('/db/deleteMovie POST | Success:', JSON.stringify(instance[0]));
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
        console.log('/db/deleteMovie POST | Error: ', JSON.stringify(err));
        return {
            status: 400,
            message: err
        }
    });
});

router.post('/db/updateMovie', async (ctx, next)=> {
    ctx.body = await movie.updateMovie(ctx.request.body).then((instance)=> {
        console.log('/db/updateMovie POST | Success: ', JSON.stringify(instance[0]));
        if (instance[0].affectedRows != 0 && instance[0].changeRows != 0) {
            return {
                status: 200,
                message: 'Success'
            }
        } else {
            return {
                status: 205,
                message: 'Unmatched Or still same Values'
            }
        }
    }).catch((err)=> {
        console.log('/db/updateMovie POST | Error: ', JSON.stringify(err));
        return {
            status: 400,
            error: err.errors
        };
    });
});

router.get('/db/movieGenres', async (ctx, next)=> {
    ctx.body = await movie.getMovieGenres().then((instance)=> {
        console.log('/db/movieGenres POST | Success: ', JSON.stringify(instance[0]));
        return {
            status: 200,
            message: 'Success',
            instance: instance[0]
        };
    }).catch((err)=> {
        console.log('/db/movieGenres POST | Error: ', JSON.stringify(err));
        return {
            status: 400,
            error: err.errors
        };
    });
});

router.post('/db/getMoviesByGenre', async (ctx, next)=> {
    ctx.body = await movie.getMoviesByGenre(ctx.request.body).then((instance)=> {
        console.log('/db/getMoviesByGenre POST | Success');
        return {
            status: 200,
            message: 'Success',
            instances: instance[0]
        };
    }).catch((err)=> {
        console.log('/db/getMoviesByGenre POST | Error: ', JSON.status(instance[0]));
        return {
            status: 400,
            error: err.errors
        };
    });
});

router.post('/db/getNewestMovies', async (ctx, next)=> {
    ctx.body = await movie.getNewestMovies(ctx.request.body).then((instance)=> {
        console.log('/db/getNewestMovies POST | Success');
        return {
            status: 200,
            message: 'Success',
            instances: instance[0]
        }
    }).catch((err)=> {
        console.log('/db/getNewestMovies POST | Error: ', JSON.stringify(err));
        return {
            status: 400,
            error: err.errors
        }
    });
})

module.exports = router;
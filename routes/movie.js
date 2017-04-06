const Router    = require('koa-router');
const movie     = require('./../data/movie');

let router = new Router();

router.post('/db/addMovie', async (ctx, next)=> {
    ctx.body = await movie.addMovie(ctx.request.body).then((instance, meta)=> {
        console.log('Add Movie Success: ', JSON.stringify(instance[0]));
        return {
            status: 200,
            message: 'Success'
        };
    }).catch(function (err) {
        console.log('Add Movie Error: ', JSON.stringify(err));
        return {
            status: 400,
            error: err.errors
        }
    });
});

router.post('/db/findMovie', async (ctx, next)=> {
    ctx.body = await movie.findMovie(ctx.request.body).then((instance, meta)=> {
        console.log('findMovie Movie Success: ', JSON.stringify(instance[0]));
        return {
            status: 200,
            instance: instance[0],
            message: 'Success'
        };
    }).catch(function (err) {
        console.log('find Movie Error: ', JSON.stringify(err));
        return {
            status: 400,
            error: err.errors
        }
    });
});

router.post('/db/deleteMovie', async (ctx, next)=> {
    ctx.body = await movie.deleteMovie(ctx.request.body).then((instance)=> {
        console.log('POST | Delete Movie Success:', JSON.stringify(instance[0]));
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
        console.log('Delete Movie Failed: ', JSON.stringify(err));
        return {
            status: 400,
            message: err
        }
    });
});

router.post('/db/updateMovie', async (ctx, next)=> {
    ctx.body = await movie.updateMovie(ctx.request.body).then((instance)=> {
        console.log('POST | Update Movie Success: ', JSON.stringify(instance[0]));
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
        console.log('Update Movie Failed: ', JSON.stringify(err));
        return {
            status: 400,
            error: err.errors
        };
    });
});

router.get('/db/movieGenres', async (ctx, next)=> {
    ctx.body = await movie.getMovieGenres().then((instance)=> {
        console.log('GET | Get Movie Genres Success: ', JSON.stringify(instance[0]));
        return {
            status: 200,
            message: instance[0]
        };
    }).catch((err)=> {
        console.log('GET | Get Movie Genres Failed: ', JSON.stringify(err));
        return {
            status: 400,
            error: err.errors
        };
    });
});

router.post('/db/getMoviesByGenre', async (ctx, next)=> {
    ctx.body = await movie.getMoviesByGenre(ctx.request.body).then((instance)=> {
        console.log('POST | Get Movies By Genre Success');
        return {
            status: 200,
            instances: instance[0]
        };
    }).catch((err)=> {
        console.log('POST | Get Movies By Genres Failed: ', JSON.status(instance[0]));
        return {
            status: 400,
            error: err.errors
        };
    });
});

router.post('/db/getNewestMovies', async (ctx, next)=> {
    ctx.body = await movie.getNewestMovies(ctx.request.body).then((instance)=> {
        console.log('POST | Get Newest Movies Success');
        return {
            status: 200,
            instances: instance[0]
        }
    }).catch((err)=> {
        console.log('POST | Get Newest Movies Failed', JSON.stringify(err));
        return {
            status: 400,
            error: err.errors
        }
    });
})

module.exports = router;
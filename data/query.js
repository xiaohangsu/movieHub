// this is a query warpper for error catching
// Miss arguments in ctx.req.body can be resolve by this.

let Promise = require('bluebird');

module.exports = (func)=>{
    return new Promise((resolve, reject)=> {
        try {
            resolve(func());
        } catch(err) {
            reject(err);
        }
    });
};
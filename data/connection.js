const Sequelize = require('sequelize');
const sequelize = new Sequelize('moviebase', 'nyumovie', 'Usa2018!', {
    host: 'nyumoviemysql.cmpl0emqr3ka.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;
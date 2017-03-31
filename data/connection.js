const Sequelize = require('sequelize');
const sequelize = new Sequelize('moviebase', 'root', '', {
    host: '',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;

const Sequelize = require('sequelize');
const configDev={
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    port:3306,
    logging:true,
    omitNull: true,
    native: true,
};


const sequelize = new Sequelize('yubook', 'root', '123456', configDev);

module.exports = sequelize;

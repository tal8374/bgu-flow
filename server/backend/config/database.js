const Sequelize = require('sequelize');

module.exports = new Sequelize('D', 'postgres', '1234',  {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    port:5433,
    define: {
        timestamps: false
    },
    pool: {
        max: 20,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

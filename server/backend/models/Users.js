const Sequelize = require('sequelize');
const db= require('../config/database');

const User= db.define('Users', {
    email: {type: Sequelize.STRING,  primaryKey: true},
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    phone_number: Sequelize.STRING,
});

module.exports= User;
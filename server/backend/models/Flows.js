const Sequelize = require('sequelize');
const db= require('../config/database');

const Flow= db.define('Courses', {
    flow_id: {type: Sequelize.STRING,  primaryKey: true},
    data: Sequelize.STRING,
    creation_date: Sequelize.DataTypes,
    last_modified: Sequelize.DataTypes
});

module.exports= Flow;

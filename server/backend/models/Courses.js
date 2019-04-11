const Sequelize = require('sequelize');
const db= require('../config/database');

const Course= db.define('Courses', {
    course_id: {type: Sequelize.STRING,  primaryKey: true},
    course_name: Sequelize.STRING,
});

module.exports= Course;

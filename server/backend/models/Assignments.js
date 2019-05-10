const Sequelize = require('sequelize');
const db= require('../config/database');
const Course=require('../models/Courses');

const Assignment= db.define('Assignments', {
    assignment_id: {type: Sequelize.STRING,  primaryKey: true},
    course_id: {type:Sequelize.STRING,primaryKey: true,
        references: {
            // This is a reference to another model
            model: Course,

            // This is the column name of the referenced model
            key: 'course_id',

            // This declares when to check the foreign key constraint. PostgreSQL only.
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }},
    name: Sequelize.STRING,
    due_date: Sequelize.DataTypes,
});

module.exports= Assignment;

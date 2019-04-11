const Sequelize = require('sequelize');
const db= require('../config/database');
const User=require('../models/Users');
const Course=require('./Courses');



const UserCourse= db.define('User Courses', {
    user_email: {type: Sequelize.STRING,  primaryKey: true,
        references: {
            // This is a reference to another model
            model: User,

            // This is the column name of the referenced model
            key: 'email',

            //This declares when to check the foreign key constraint. PostgreSQL only.
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }},
    course_id: {type: Sequelize.STRING,  primaryKey: true,
        references: {
            // This is a reference to another model
            model: Course,

            // This is the column name of the referenced model
            key: 'course_id',

            // This declares when to check the foreign key constraint. PostgreSQL only.
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }}

});

module.exports= UserCourse;

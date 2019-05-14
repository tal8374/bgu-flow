const Sequelize = require('sequelize');
const db= require(appRoot + '/config/database');
const Course=require('./Courses');
const User=require('../models/Users');



module.exports= (db, DataTypes)=> {
    const Course_Partners = db.define('Course_Partners', {
        user_email: {
            type: DataTypes.STRING, primaryKey: true,
            primaryKey: true,
            /*references: {
                // This is a reference to another model
                model: User,

                // This is the column name of the referenced model
                key: 'email',

                // This declares when to check the foreign key constraint. PostgreSQL only.
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }*/
        },
        course: {
            type: DataTypes.STRING, primaryKey: true,
            primaryKey: true,
            /*references: {
                // This is a reference to another model
                model: Course,

                // This is the column name of the referenced model
                key: 'course_id',

                // This declares when to check the foreign key constraint. PostgreSQL only.
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }*/
        },
        partner_email: {
            type: Sequelize.DataTypes.STRING, primaryKey: true,
            primaryKey: true,
            /*references: {
                // This is a reference to another model
                model: User,

                // This is the column name of the referenced model
                key: 'email',

                // This declares when to check the foreign key constraint. PostgreSQL only.
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }*/
        },
    },{timestamps: false});
    Course_Partners.associate=function(models)
    {
        Course_Partners.belongsTo(models.Users,{
            foreignKey: 'user_email',
            as: 'email'
        });
        Course_Partners.belongsTo(models.Courses, {
            foreignKey: 'course',
            as: 'course_id'

        });
    };
    Course_Partners.sync();
    return Course_Partners;
};

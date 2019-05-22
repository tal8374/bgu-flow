const Sequelize = require('sequelize');
const db= require(appRoot + '/config/database');
const User=require('../models/Users');
const Course=require('./Courses');


module.exports= (db, DataTypes)=> {
    const User_Course = db.define('User_Course', {
        user_email: {
            type: DataTypes.STRING, primaryKey: true,
           /* references: {
                // This is a reference to another model
                model: User,

                // This is the column name of the referenced model
                key: 'email',

                //This declares when to check the foreign key constraint. PostgreSQL only.
                deferrable: Deferrable.INITIALLY_IMMEDIATE
            }*/
        },
        course_id: {
            type: DataTypes.STRING, primaryKey: true,
            /*references: {
                // This is a reference to another model
                model: Course,

                // This is the column name of the referenced model
                key: 'course_id',

                // This declares when to check the foreign key constraint. PostgreSQL only.
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }*/
        },
        course_name: {
            type: DataTypes.STRING,
        }

    },{timestamps: false});
    User_Course.associate=function(models)
    {
        User_Course.belongsTo(models.Courses, {
            foreignKey: 'course_id',

        });
        User_Course.belongsTo(models.Users,{
            foreignKey: 'user_email',
            as: 'email'
        });
    };
   User_Course.sync();
    return User_Course;
};

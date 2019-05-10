const Sequelize = require('sequelize');
const db= require(appRoot + '/config/database');


module.exports= (db, DataTypes)=> {
    const Course = db.define('Courses', {
        course_id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        course_name: {
            type:DataTypes.STRING
        },
    },{timestamps: false});
    Course.associate= function(models){
        Course.hasMany(models.Assignments,{
            foreignKey:'course_id',
            targetKey:'course_id'
        });
        Course.hasMany(models.Course_Partners,{
            foreignKey:'course',
            targetKey:'course_id'
        });
        Course.hasMany(models.Messages_Forums,{
            foreignKey:'course_id',
            targetKey:'course_id'
        });
    };
    Course.sync();
    return Course;
};

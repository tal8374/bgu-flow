const Sequelize= require('sequelize');
const db= require(appRoot + '/config/database');
//const Course=require('./Courses');

module.exports= (db, DataTypes)=> {
    const Announcement=db.define('Announcements',{
        massage_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING,
        },
        course_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING,
        },
        course_name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        user_name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        subject: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        message: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        date: {
            allowNull: false,
            type: DataTypes.STRING,
        },

    },{timestamps: false , omitNull:true});
    Announcement.associate=function(models)
    {
        Announcement.belongsTo(models.Courses, {
            foreignKey: 'course_id',

        });
    };
    Announcement.sync();
    return Announcement;
};

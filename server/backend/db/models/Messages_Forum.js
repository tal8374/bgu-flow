const Sequelize= require('sequelize');
const db= require(appRoot + '/config/database');
//const Course=require('./Courses');

module.exports= (db, DataTypes)=> {
    const Message_Forum= db.define('Messages_Forums',{
        message_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING
        },
        forum_id: {
            allowNull: false,
            type: DataTypes.STRING
        },
        course_id: {
            allowNull: false,
            type: DataTypes.STRING
        },
        forum_name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        course_name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        user_name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        subject: {
            allowNull: false,
            type: DataTypes.STRING
        },
        message: {
            allowNull: false,
            type: DataTypes.STRING
        },
        date: {
            allowNull: false,
            type: DataTypes.STRING
        }
    },{timestamps: false});
    Message_Forum.associate=function(models) {
        Message_Forum.belongsTo(models.Courses, {
            foreignKey: 'course_id',

        });
    };
    Message_Forum.sync();
    return Message_Forum;
};

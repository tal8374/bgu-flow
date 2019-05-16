const Sequelize = require('sequelize');
const db= require(appRoot + '/config/database');


module.exports= (db, DataTypes)=> {
    const Messages_Forums= db.define('Messages_Forums',{
        forum_id: {
            allowNull: false,
            primaryKey: true,
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
    Messages_Forums.associate=function(models) {
        Messages_Forums.belongsTo(models.Courses, {
            foreignKey: 'course_id',

        });
    };
    Messages_Forums.sync();
    return Messages_Forums;
};

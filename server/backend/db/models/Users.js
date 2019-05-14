const Sequelize = require('sequelize');
const db= require(appRoot + '/config/database');


module.exports= (db, DataTypes)=> {
    const User = db.define('Users', {
        email: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        phone_number: DataTypes.STRING,
        //timestamps: false,
    },{timestamps: false});

    User.associate= function(models) {
        User.hasMany(models.User_Course, {
            foreignKey: 'user_email',
            targetKey: 'email'
        });
        User.hasMany(models.Course_Partners, {
            foreignKey: 'user_email',
            targetKey: 'email'
        });
        User.hasMany(models.Course_Partners, {
            foreignKey: 'partner_email',
            targetKey: 'email'
        });
        User.hasMany(models.User_Flows, {
            foreignKey: 'user_email',
            targetKey: 'email'
        });
    };
    User.sync();
    return User;
};

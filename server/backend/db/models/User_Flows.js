const Sequelize = require('sequelize');
const db= require(appRoot + '/config/database');
const User=require('../models/Users');
const Flow=require('../models/Flows');


module.exports= (db, DataTypes)=> {
    const User_Flows = db.define('User_Flows', {
        user_email: {
            type: DataTypes.STRING, primaryKey: true,
           /* references: {
                // This is a reference to another model
                model: User,

                // This is the column name of the referenced model
                key: 'email',

                // This declares when to check the foreign key constraint. PostgreSQL only.
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }*/
        },
        flow_id: {
            type: DataTypes.STRING, primaryKey: true,
            /*references: {
                // This is a reference to another model
                model: Flow,

                // This is the column name of the referenced model
                key: 'flow_id',

                // This declares when to check the foreign key constraint. PostgreSQL only.
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }*/
        }

    },{timestamps: false});
    User_Flows.associate=function(models)
    {
        User_Flows.belongsTo(models.Flows, {
            foreignKey: 'flow_id',

        });
        User_Flows.belongsTo(models.Users,{
            foreignKey: 'user_email',
            as: 'email'
        });
    };

    User_Flows.sync();
    return User_Flows;
};

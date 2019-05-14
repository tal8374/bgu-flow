const Sequelize = require('sequelize');
const db= require('../config/database');
const User=require('../models/Users');
const Flow=require('../models/Flows');

const UserFlows= db.define('User Course', {
    user_email: {type: Sequelize.STRING,  primaryKey: true,
        references: {
            // This is a reference to another model
            model: User,

            // This is the column name of the referenced model
            key: 'email',

            // This declares when to check the foreign key constraint. PostgreSQL only.
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }},
    flow_id: {type: Sequelize.STRING,  primaryKey: true,
        references: {
            // This is a reference to another model
            model: Flow,

            // This is the column name of the referenced model
            key: 'flow_id',

            // This declares when to check the foreign key constraint. PostgreSQL only.
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }}

});


module.exports= UserFlow;

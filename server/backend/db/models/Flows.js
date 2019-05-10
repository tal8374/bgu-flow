const Sequelize = require('sequelize');
const db= require(appRoot + '/config/database');


module.exports= (db, DataTypes)=> {
    const Flow = db.define('Flows', {
        flow_id: {type: Sequelize.DataTypes.STRING, primaryKey: true},
        data: Sequelize.DataTypes.STRING,
        creation_date: Sequelize.DataTypes.DATE,
        last_modified: Sequelize.DataTypes.DATE
    });
    Flow.associate= function(models) {
        Flow.hasMany(models.User_Flows, {
            foreignKey: 'flow_id',
            targetKey: 'flow_id'
        },{timestamps: false});
    };
    Flow.sync();
    return Flow;
};

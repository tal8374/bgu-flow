const Sequelize= require('sequelize');
const db= require(appRoot + '/config/database');
//const Course=require('./Courses');

module.exports= (db,DataTypes)=> {
    const Assignment=db.define('Assignments',{
        assignment_id: {
            type: DataTypes.STRING,
            primaryKey: true},
       course_id: {
            type: DataTypes.STRING,
            //primaryKey: true,
           /*references: {
                // This is a reference to another model
                model: Course,

                // This is the column name of the referenced model
                key: 'course_id',

                // This declares when to check the foreign key constraint. PostgreSQL only.
                //deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }*/
        },
        assignment_name: {type: DataTypes.STRING},
        course_name: {type: DataTypes.STRING},
        due_date: {allowNull: false, type: DataTypes.STRING},

    },{timestamps: false , omitNull:true});
    Assignment.associate=function(models)
    {
        Assignment.belongsTo(models.Courses, {
            foreignKey: 'course_id',

        });
    };
    Assignment.sync();
    return Assignment;
};

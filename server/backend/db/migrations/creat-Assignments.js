'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Assignments', {
            assignment_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            course_id: {
                allowNull: false,
               // primaryKey: true,
                type: Sequelize.STRING
            },
            due_date: {
                allowNull: false,
                type: Sequelize.DATE
            },
            name:{
                type: Sequelize.STRING
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Assignments');
    }
};

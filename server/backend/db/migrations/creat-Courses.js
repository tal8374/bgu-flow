'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Courses', {
            course_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            course_name: {
                allowNull: false,
                type: Sequelize.STRING
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Courses');
    }
};

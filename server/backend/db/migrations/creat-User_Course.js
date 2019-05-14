'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('User_Course', {
            user_email: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            course_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('User_Course');
    }
};

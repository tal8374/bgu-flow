'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Course_Partners', {
            user_email: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            course: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
           partner_email: {
                type: Sequelize.STRING,
               primaryKey: true,
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Course_Partners');
    }
};

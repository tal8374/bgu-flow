'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Forums_Messages', {
            forum_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            course_id: {
                allowNull: false,
                type: Sequelize.STRING
            },
            user_name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            subject: {
                allowNull: false,
                type: Sequelize.STRING
            },
            message: {
                allowNull: false,
                type: Sequelize.STRING
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Messages_Forum');
    }
};

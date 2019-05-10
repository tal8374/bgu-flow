'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User_Flows', {
      user_email: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      flow_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User_Flows');
  }
};
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Flows', {
      flow_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      creation_date: {
        type: Sequelize.DATE
      },
      last_modified: {
          type: Sequelize.DATE
      },
      flow_data:{
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Flows');
  }
};

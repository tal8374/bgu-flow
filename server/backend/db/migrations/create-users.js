module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            email: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            first_name: {
                type: Sequelize.STRING
            },
            last_name: {
                type: Sequelize.STRING
            },
            phone_number: {
                type: Sequelize.STRING
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Users');
    },
    timestamps: false
};

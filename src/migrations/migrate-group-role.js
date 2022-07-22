'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Group_Role', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
      groupId: {
        type: Sequelize.INTEGER,
      },
      rowId: {
        type: Sequelize.INTEGER,
      },

      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Group_Role');
  }
};

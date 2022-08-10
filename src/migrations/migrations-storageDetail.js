'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('StorageDetail', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
      userId: {
        type: Sequelize.INTEGER,
      },
      coursesId: {
        type: Sequelize.INTEGER,
      },
      favouriteListId: {
        type: Sequelize.INTEGER,
      },
      dateSave: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('StorageDetail');
  }
};

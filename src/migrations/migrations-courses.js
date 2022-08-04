'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
      name: {
        type: Sequelize.STRING,
      },
      author: {
        type: Sequelize.STRING,
      },
      time: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.BLOB,
      },
      video: {
        type: Sequelize.BLOB,
      },
      dateUpload: {
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
    await queryInterface.dropTable('Courses');
  }
};
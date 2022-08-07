'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
        type: Sequelize.STRING,
      },
      dateUpload: {
        type: Sequelize.STRING,
      },
      lessonId: {
        type: Sequelize.INTEGER,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Courses');
  }
};
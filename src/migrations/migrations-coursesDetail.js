'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CoursesDetail', {
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
      dateStudent: {
        type: Sequelize.STRING,
      },
      desc: {
        type: Sequelize.STRING,
      },
      evaluateId: {
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
    await queryInterface.dropTable('CoursesDetail');
  }
};

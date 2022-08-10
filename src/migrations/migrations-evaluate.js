'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Evaluate', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
      averageRating: {
        type: Sequelize.FLOAT,
      },
      numberReviews: {
        type: Sequelize.INTEGER,
      },
      comment: {
        type: Sequelize.STRING(1234),
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      coursesId: {
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
    await queryInterface.dropTable('Evaluate');
  }
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  // object relational mapping
  Lesson.init({
    name: DataTypes.STRING,
    video: DataTypes.STRING,
    coursesId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Lesson',
  });
  return Lesson;
};
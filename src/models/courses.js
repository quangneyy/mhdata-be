'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
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
  Courses.init({
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    time: DataTypes.STRING,
    image: DataTypes.BLOB,
    video: DataTypes.BLOB,
    dateUpload: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Courses',
  });
  return Courses;
};
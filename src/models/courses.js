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
      Courses.hasMany(models.Evaluate);
      
      Courses.hasMany(models.Lesson);

      Courses.belongsTo(models.Category);

      Courses.belongsToMany(models.FavouriteList, { through: 'StorageDetail' })
      // define association here
    }
  };

  // object relational mapping
  Courses.init({
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    time: DataTypes.STRING,
    image: DataTypes.STRING(1234),
    dateUpload: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
  }, { 
    sequelize,
    modelName: 'Courses',
  });
  return Courses;
};
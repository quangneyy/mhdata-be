'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.hasMany(models.Evaluate);
      
      Course.hasMany(models.Lesson);

      Course.belongsTo(models.Category);

      Course.belongsToMany(models.FavouriteList, { through: 'StorageDetail' })
      // define association here
    }
  };

  // object relational mapping
  Course.init({
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    time: DataTypes.STRING,
    image: DataTypes.STRING(1234),
    dateUpload: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
  }, { 
    sequelize,
    modelName: 'Course',
  });
  return Course;
};
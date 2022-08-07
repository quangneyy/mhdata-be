'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FavouriteList extends Model {
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
  FavouriteList.init({
    coursesNumber: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'FavouriteList',
  });
  return FavouriteList;
};
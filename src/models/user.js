'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Group);

      User.hasMany(models.CoursesDetail);

      User.hasMany(models.StorageDetail);

      User.hasMany(models.Evaluate);

      User.hasMany(models.FavouriteList);

      // define association here
    }
  };
  // object relational mapping
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    phone: DataTypes.STRING,
    groupId: DataTypes.INTEGER
    }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  // object relational mapping
  CustomerList.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    location: DataTypes.STRING,
    source: DataTypes.STRING,
    type: DataTypes.STRING,
    businessName: DataTypes.STRING,
    businessID: DataTypes.STRING,
    foundedDate: DataTypes.STRING,
    dayCreated: DataTypes.STRING,
    dayModified: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'CustomerList',
  });
  return CustomerList;
};
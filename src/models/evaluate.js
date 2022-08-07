'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evaluate extends Model {
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
  Evaluate.init({
    ratingRate: DataTypes.STRING,
    numberReviews: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Evaluate',
  });
  return Evaluate;
};
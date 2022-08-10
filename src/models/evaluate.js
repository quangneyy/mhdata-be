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
      Evaluate.belongsTo(models.User);
      Evaluate.belongsTo(models.Course);

      // define association here
    }
  };
  // object relational mapping
  Evaluate.init({
    averageRating: DataTypes.FLOAT,
    numberReviews: DataTypes.INTEGER,
    comments: DataTypes.STRING(1234),
    userId: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Evaluate',
  });
  return Evaluate;
};
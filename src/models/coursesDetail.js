'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CoursesDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CoursesDetail.belongsTo(models.User);
      CoursesDetail.belongsTo(models.Courses);

      // define association here
    }
  };
  // object relational mapping
  CoursesDetail.init({
    userId: DataTypes.INTEGER,
    coursesId: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    numberStar: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'CoursesDetail',
  });
  return CoursesDetail;
};
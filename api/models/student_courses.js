'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student_courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student_courses.init({
    retired: DataTypes.BOOLEAN,
    graduated: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Student_courses',
  });
  return Student_courses;
};
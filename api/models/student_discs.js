'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student_discs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student_discs.init({
    qttcoursed: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Student_discs',
  });
  return Student_discs;
};
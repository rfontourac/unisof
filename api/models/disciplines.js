'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Disciplines extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Disciplines.belongsToMany(models.Courses, {
        through: "Course_discs"
      })
      Disciplines.belongsToMany(models.Students, {
        through: "Students_discs"
      })
      Disciplines.hasMany(models.Classes, {
        foreignKey: "DisciplineId"
      })
      Disciplines.hasMany(models.Records, {
        foreignKey: "DisciplineId"
      })
      
    }
  }
  Disciplines.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Disciplines',
  });
  return Disciplines;
};
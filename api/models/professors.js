'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Professors.belongsToMany(models.Courses, {
        through: "Course_profs"
      })
      Professors.belongsToMany(models.Departments, {
        through: "Dpt_profs"
      })
      Professors.hasMany(models.Classes, {
        foreignKey: "ProfessorId"
      })
      
    }
  }
  Professors.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Professors',
  });
  return Professors;
};
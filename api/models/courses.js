'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Courses.belongsToMany(models.Professors, {
        through: "Course_profs"
      })
      Courses.belongsToMany(models.Disciplines, {
        through: "Course_discs"
      })
      Courses.belongsToMany(models.Students, {
        through: "Student_courses"
      })
      Courses.belongsTo(models.Departments, {
        foreignKey: "DepartmentId"
      })
    }
  }
  Courses.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        validateName: function(data){
          if (data.length < 2 ) throw new Error('O campo nome deve ter ao menos 2 caracteres')
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Courses',
  });
  return Courses;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Students.belongsToMany(models.Classes, {
        through: "Student_classes"
      })
      Students.belongsToMany(models.Courses, {
        through: "Student_courses"
      })
      Students.belongsToMany(models.Disciplines, {
        through: "Student_discs"
      })
    }
  }
  Students.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    graduationdate: DataTypes.DATEONLY,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Students',
  });
  return Students;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Classes.belongsToMany(models.Students, {
        through: "Student_classes"
      })
      Classes.hasMany(models.Records, {
        foreignKey: "ClassId"
      })
      Classes.belongsTo(models.Professors, {
        foreignKey: "ProfessorId"
      })
      Classes.belongsTo(models.Disciplines, {
        foreignKey: "DisciplineId"
      })
    }
  }
  Classes.init({
    datainicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Classes',
  });
  return Classes;
};
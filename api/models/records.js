'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Records extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Records.belongsTo(models.Professors, {
        foreignKey: "ProfessorId"
      })
      Records.belongsTo(models.Disciplines, {
        foreignKey: "DisciplineId"
      })
      Records.belongsTo(models.Students, {
        foreignKey: "StudentId"
      })
      Records.belongsTo(models.Classes, {
        foreignKey: "ClassId"
      })
    }
  }
  Records.init({
    grade: DataTypes.FLOAT,
    attendance: DataTypes.FLOAT,
    aprooved: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Records',
  });
  return Records;
};
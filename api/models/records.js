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
    grade: {
      type: DataTypes.FLOAT,
      validate: {
        validateGrade(data){
          console.log('passou')
          if ( data < 0 || data > 10 ) throw new Error('A nota deve ser representada entre 0 e 10')
        }
      }
    },
    attendance: {
      type: DataTypes.FLOAT,
      validate: {
        validateAttendance: function(data){
          if ( data < 0 || data > 1) throw new Error('A frequência deve ser representada entre 0 e 1')
        }
      }
    },
    aprooved: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Records',
  });
  return Records;
};
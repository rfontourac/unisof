'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Historicos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Historicos.hasMany(models.Alunos, {
        foreignKey: "idaluno"
      })
      Historicos.hasMany(models.Disciplinas, {
        foreignKey: "iddisciplina"
      })
    }
  }
  Historicos.init({
    nota: DataTypes.FLOAT,
    frequencia: DataTypes.FLOAT,
    aprovado: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Historicos',
  });
  return Historicos;
};
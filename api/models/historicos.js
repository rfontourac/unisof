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
      Historicos.belongsTo(models.Professores, {
        foreignKey: "idprofessores"
      })
      Historicos.belongsTo(models.Disciplinas, {
        foreignKey: "iddisciplina"
      })
      Historicos.belongsTo(models.Alunos, {
        foreignKey: "idaluno"
      })
      Historicos.belongsTo(models.Turmas, {
        foreignKey: "idturma"
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
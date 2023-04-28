'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Turmas.belongsToMany(models.Alunos, {
        through: "Aluno_turmas"
      })
      Turmas.hasMany(models.Historicos, {
        foreignKey: "idturma"
      })
      Turmas.belongsTo(models.Professores, {
        foreignKey: "idprofessor"
      })
      Turmas.belongsTo(models.Disciplinas, {
        foreignKey: "iddisciplina"
      })
    }
  }
  Turmas.init({
    datainicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Turmas',
  });
  return Turmas;
};
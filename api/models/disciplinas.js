'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Disciplinas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Disciplinas.belongsToMany(models.Cursos, {
        through: "Curso_disc"
      })
      Disciplinas.belongsToMany(models.Alunos, {
        through: "Aluno_discs"
      })
      Disciplinas.hasMany(models.Turmas, {
        foreignKey: "iddisciplina"
      })
      Disciplinas.hasMany(models.Historicos, {
        foreignKey: "iddisciplina"
      })
      
    }
  }
  Disciplinas.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Disciplinas',
  });
  return Disciplinas;
};
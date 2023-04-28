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
      Disciplinas.belongsToMany(models.Professores, {
        through: "Disc_profs"
      })
      Disciplinas.belongsToMany(models.Cursos, {
        through: "Curso_disc"
      })
      Disciplinas.hasMany(models.Historicos, {
        foreignKey: "iddisciplina"
      })
      Disciplinas.belongsToMany(models.Alunos, {
        through: "Aluno_discs"
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
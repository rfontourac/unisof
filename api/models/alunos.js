'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alunos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Alunos.belongsToMany(models.Turmas, {
        through: "Aluno_turmas"
      })
      Alunos.belongsTo(models.Cursos, {
        foreignKey: "idcurso"
      })
      Alunos.belongsToMany(models.Disciplinas, {
        through: "Aluno_discs"
      })
    }
  }
  Alunos.init({
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    dataformatura: DataTypes.DATEONLY,
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Alunos',
  });
  return Alunos;
};
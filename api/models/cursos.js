'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cursos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cursos.belongsToMany(models.Professores, {
        through: "Curso_profs"
      })
      Cursos.belongsToMany(models.Disciplinas, {
        through: "Curso_discs"
      })
      Cursos.hasMany(models.Alunos, {
        foreignKey: "idcurso"
      })
      Cursos.belongsTo(models.Departamentos, {
        foreignKey: "iddepartamento"
      })
    }
  }
  Cursos.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cursos',
  });
  return Cursos;
};
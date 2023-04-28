'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Professores.belongsToMany(models.Cursos, {
        through: "Curso_profs"
      })
      Professores.belongsToMany(models.Departamentos, {
        through: "Dpto_profs"
      })
      Professores.hasMany(models.Turmas, {
        foreignKey: "idprofessor"
      })
      
    }
  }
  Professores.init({
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Professores',
  });
  return Professores;
};
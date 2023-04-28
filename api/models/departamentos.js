'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Departamentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Departamentos.belongsToMany(models.Professores, {
        through: "Dpto_profs"
      })
      Departamentos.hasMany(models.Cursos, {
        foreignKey: "iddepartamento"
      })
    }
  }
  Departamentos.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Departamentos',
  });
  return Departamentos;
};
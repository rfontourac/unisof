'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aluno_cursos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Aluno_cursos.init({
    jubilado: DataTypes.BOOLEAN,
    formado: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Aluno_cursos',
  });
  return Aluno_cursos;
};
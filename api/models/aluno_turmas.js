'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aluno_turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Aluno_turmas.init({
    idaluno: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Aluno_turmas',
  });
  return Aluno_turmas;
};
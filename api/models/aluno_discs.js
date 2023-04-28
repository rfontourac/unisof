'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aluno_discs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Aluno_discs.init({
    qtdecursada: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Aluno_discs',
  });
  return Aluno_discs;
};
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
      Turmas.belongsTo(models.Cursos, {
        foreignKey: "idcurso"
      })
      Turmas.hasMany(models.Alunos, {
        foreignKey: "idturma"
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
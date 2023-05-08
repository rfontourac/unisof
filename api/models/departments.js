'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Departments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Departments.belongsToMany(models.Professors, {
        through: "Dpt_profs"
      })
      Departments.hasMany(models.Courses, {
        foreignKey: "DepartmentId"
      })
    }
  }
  Departments.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        validateName: function(data){
          if (data.length < 2 ) throw new Error('O campo nome deve ter ao menos 2 caracteres')
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Departments',
  });
  return Departments;
};
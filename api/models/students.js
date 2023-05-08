'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Students.belongsToMany(models.Classes, {
        through: "Student_classes"
      })
      Students.belongsToMany(models.Courses, {
        through: "Student_courses"
      })
      Students.belongsToMany(models.Disciplines, {
        through: "Student_discs"
      })
      Students.hasMany(models.Records, {
        foreignKey: "StudentId"
      })
    }
  }
  Students.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        validateName: function(data){
          if (data.length < 2 ) throw new Error('O campo nome deve ter ao menos 2 caracteres')
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        validatePhone: function(data){
          const regex = new RegExp(/\(\d{2}\)\d{4,5}\-?\d{4}/, "g")
          const found = data.match(regex)
          if (!found) throw new Error('Dados de telefone devem seguir o padrão de telefone com DDD')
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'O campo deve conter um endereço de email'
        }
      }
    },
    graduationdate: DataTypes.DATEONLY,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Students',
  });
  return Students;
};
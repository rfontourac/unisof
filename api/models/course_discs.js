'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course_discs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Course_discs.init({
    term: { 
      type: DataTypes.INTEGER,
      validate: {
        validateTerm: function(data){
          if (data < 1 && data > 12) throw new Error('O valor do período deve estar entre 1 e 12')
        }
      }

    }
  }, {
    sequelize,
    modelName: 'Course_discs',
  });
  return Course_discs;
};
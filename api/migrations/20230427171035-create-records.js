'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Records', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ClassId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Classes', key: 'id'}
      },
      StudentId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Students', key: 'id'}
      },
      DisciplineId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Disciplines', key: 'id'}
      },
      ProfessorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Professors', key: 'id'}
      },
      grade: {
        type: Sequelize.FLOAT
      },
      attendance: {
        type: Sequelize.FLOAT
      },
      aprooved: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Records');
  }
};
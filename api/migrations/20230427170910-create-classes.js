'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Classes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ProfessorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Professors', key: 'id'}
      },
      DisciplineId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Disciplines', key: 'id'}
      },
      startdate: {
        allowNull: false,
        type: Sequelize.DATEONLY
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
    await queryInterface.dropTable('Classes');
  }
};
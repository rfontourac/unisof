'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dpt_profs', {
      ProfessorId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {model: 'Professors', key: 'id'}
      },
      DepartmentId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {model: 'Departments', key: 'id'}
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
    await queryInterface.dropTable('Dpt_profs');
  }
};
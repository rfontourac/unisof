'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Student_discs', {
      StudentId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {model: 'Students', key: 'id'}
      },
      DisciplineId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {model: 'Disciplines', key: 'id'}
      },
      qttcoursed: {
        defaultValue: 1,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Student_discs');
  }
};
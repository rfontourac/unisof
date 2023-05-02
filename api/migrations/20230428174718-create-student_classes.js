'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Student_classes', {
      StudentId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {model: 'Students', key: 'id'}
      },
      ClassId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {model: 'Classes', key: 'id'}
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
    await queryInterface.dropTable('Student_classes');
  }
};
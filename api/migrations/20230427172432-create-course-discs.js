'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Course_discs', {
      DisciplineId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {model: 'Disciplines', key: 'id'}
      },
      CourseId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {model: 'Courses', key: 'id'}
      },
      term: {
        allowNull: false,
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
    await queryInterface.dropTable('Course_discs');
  }
};
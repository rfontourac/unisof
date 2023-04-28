'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Aluno_turmas', {
      idaluno: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {model: 'Alunos', key: 'id'}
      },
      idturma: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {model: 'Turmas', key: 'id'}
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
    await queryInterface.dropTable('Aluno_turmas');
  }
};
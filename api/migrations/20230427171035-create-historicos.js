'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Historicos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idaluno: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Alunos', key: 'id'}
      },
      iddisciplina: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Disciplinas', key: 'id'}
      },
      idprofessor: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Professores', key: 'id'}
      },
      idturma: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Turmas', key: 'id'}
      },
      nota: {
        type: Sequelize.FLOAT
      },
      frequencia: {
        type: Sequelize.FLOAT
      },
      aprovado: {
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
    await queryInterface.dropTable('Historicos');
  }
};
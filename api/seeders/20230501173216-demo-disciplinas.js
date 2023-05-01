'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Disciplinas', [
      {
        nome: 'Fisica 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Fisica 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Fisica 3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Fisica 4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Calculo 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Calculo 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Historia do Brasil',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Historia Geral',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Fotografia 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Fotografia 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Programacao 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Programacao 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Programacao 3',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Disciplinas', null, {});
    
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Disciplines', [
      {
        name: 'Fisica 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fisica 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fisica 3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fisica 4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Calculo 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Calculo 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Historia do Brasil',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Historia Geral',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fotografia 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fotografia 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Programacao 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Programacao 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Programacao 3',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Disciplines', null, {});
    
  }
};

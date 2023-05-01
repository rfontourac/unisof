'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Professores', [
      {
        nome: 'Rodrigo Fontoura',
        telefone: '12345678',
        email: 'r@r.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Veridiana Schinke',
        telefone: '12345678',
        email: 'v@v.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'John Doe',
        telefone: '12345678',
        email: 'j@j.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Alicia Silva',
        telefone: '12345678',
        email: 'a@a.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Joao Carvalho',
        telefone: '12345678',
        email: 'joao@j.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Joana Viana',
        telefone: '12345678',
        email: 'joana@j.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Johnny Bravo',
        telefone: '12345678',
        email: 'jbravo@j.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Professores', null, {});
    
  }
};

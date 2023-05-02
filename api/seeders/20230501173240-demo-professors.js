'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Professors', [
      {
        name: 'Rodrigo Fontoura',
        phone: '12345678',
        email: 'r@r.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Veridiana Schinke',
        phone: '12345678',
        email: 'v@v.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'John Doe',
        phone: '12345678',
        email: 'j@j.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alicia Silva',
        phone: '12345678',
        email: 'a@a.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Joao Carvalho',
        phone: '12345678',
        email: 'joao@j.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Joana Viana',
        phone: '12345678',
        email: 'joana@j.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Johnny Bravo',
        phone: '12345678',
        email: 'jbravo@j.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Professors', null, {});
    
  }
};

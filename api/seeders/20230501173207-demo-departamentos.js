'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Departamentos', [
      {
        nome: 'Eletrônica',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Mecânica',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Civil',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Comunicação',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Humanas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Artes',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Departamentos', null, {});
    
  }
};

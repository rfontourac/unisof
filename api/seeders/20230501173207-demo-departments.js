'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Departments', [
      {
        name: 'Eletrônica',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mecânica',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Civil',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Comunicação',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Humanas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Artes',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Departments', null, {});
    
  }
};

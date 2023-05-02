'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Students', [
    {
      name: 'Rodrigo Centenaro',
      phone: '12345678',
      active: true,
      email: 'r@r.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      name: 'Veridiana Ramos',
      phone: '12345678',
      active: true,
      email: 'v@v.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      name: 'Rogerio Viana',
      phone: '12345678',
      active: true,
      email: 'ro@r.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      name: 'Fabio Faria',
      phone: '12345678',
      active: true,
      email: 'Johnr@r.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      name: 'Carmem Lucia',
      phone: '12345678',
      active: true,
      email: 'c@c.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      name: 'Julia Silva',
      phone: '12345678',
      active: true,
      email: 'j@j.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Students', null, {});
    
  }
};

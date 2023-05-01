'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Alunos', [
    {
      nome: 'Rodrigo Centenaro',
      telefone: '12345678',
      ativo: true,
      email: 'r@r.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      nome: 'Veridiana Ramos',
      telefone: '12345678',
      ativo: true,
      email: 'v@v.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      nome: 'Rogerio Viana',
      telefone: '12345678',
      ativo: true,
      email: 'ro@r.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      nome: 'Fabio Faria',
      telefone: '12345678',
      ativo: true,
      email: 'Johnr@r.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      nome: 'Carmem Lucia',
      telefone: '12345678',
      ativo: true,
      email: 'c@c.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      nome: 'Julia Silva',
      telefone: '12345678',
      ativo: true,
      email: 'j@j.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Alunos', null, {});
    
  }
};

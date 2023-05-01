'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cursos', [
      {
        nome: 'Engenharia Mecânica',
        iddepartamento: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Engenharia Civil',
        iddepartamento: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Tecnologia de Telecomunicações',
        iddepartamento: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Publicidade e Propaganda',
        iddepartamento: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'História',
        iddepartamento: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }

  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cursos', null, {});
    
  }
};

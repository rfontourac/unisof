'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Courses', [
      {
        name: 'Engenharia Mecânica',
        DepartmentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Engenharia Civil',
        DepartmentId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tecnologia de Telecomunicações',
        DepartmentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Publicidade e Propaganda',
        DepartmentId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'História',
        DepartmentId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }

  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Courses', null, {});
    
  }
};

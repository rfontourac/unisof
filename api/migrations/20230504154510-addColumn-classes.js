'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Classes', 'active', {
        allowNull: false,
        defaultValue: true,
        type: Sequelize.BOOLEAN
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Classes', 'active');
  }
};
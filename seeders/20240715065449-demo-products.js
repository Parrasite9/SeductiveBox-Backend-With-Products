'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        id: 1,
        productId: 'R1234',
        type: 'teddy',
        name: 'Elegant Teddy',
        description: 'A beautiful teddy',
        price: 123.00,
        material: 'Silk',
        including: 'Dress',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        productId: 'R5678',
        type: 'bodysuit',
        name: 'Stylish Bodysuit',
        description: 'A stylish bodysuit',
        price: 150.00,
        material: 'Cotton',
        including: 'Bodysuit',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};

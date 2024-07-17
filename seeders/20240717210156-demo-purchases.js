'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Purchases', [
      {
        userId: 1, // Replace with a valid user ID
        productId: 1, // Replace with a valid product ID
        variationId: 1, // Replace with a valid variation ID
        purchaseDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1, // Replace with a valid user ID
        productId: 1, // Replace with a valid product ID
        variationId: 2, // Replace with a valid variation ID
        purchaseDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Purchases', null, {});
  }
};

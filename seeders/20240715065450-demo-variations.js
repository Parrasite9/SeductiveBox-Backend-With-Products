'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Variations', [
      {
        productId: 1, // Matches the product ID from the product seeder
        size: 'Small',
        color: 'red',
        inventory: 100,
        imageUrl: 'https://example.com/image1.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 1,
        size: 'Medium',
        color: 'red',
        inventory: 200,
        imageUrl: 'https://example.com/image2.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 1,
        size: 'Large',
        color: 'blue',
        inventory: 150,
        imageUrl: 'https://example.com/image3.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 2, // New product variations
        size: 'Small',
        color: 'black',
        inventory: 100,
        imageUrl: 'https://example.com/image4.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 2,
        size: 'Medium',
        color: 'black',
        inventory: 200,
        imageUrl: 'https://example.com/image5.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 2,
        size: 'Large',
        color: 'white',
        inventory: 150,
        imageUrl: 'https://example.com/image6.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Variations', null, {});
  }
};

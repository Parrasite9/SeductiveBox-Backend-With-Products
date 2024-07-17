'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Images', [
      // Images for variation 1
      {
        productId: 1,
        variationId: 1,
        url: 'https://example.com/image1.jpg',
        isThumbnail: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 1,
        variationId: 1,
        url: 'https://example.com/image2.jpg',
        isThumbnail: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 1,
        variationId: 1,
        url: 'https://example.com/image3.jpg',
        isThumbnail: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Images for variation 2
      {
        productId: 1,
        variationId: 2,
        url: 'https://example.com/image4.jpg',
        isThumbnail: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 1,
        variationId: 2,
        url: 'https://example.com/image5.jpg',
        isThumbnail: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Images for product itself
      {
        productId: 1,
        variationId: null,
        url: 'https://example.com/image6.jpg',
        isThumbnail: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 1,
        variationId: null,
        url: 'https://example.com/image7.jpg',
        isThumbnail: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Images', null, {});
  }
};

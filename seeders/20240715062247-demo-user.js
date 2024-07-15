'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      addressLine1: '123 Main St',
      addressLine2: 'Apt 4B',
      city: 'Springfield',
      state: 'IL',
      zip: '62704',
      country: 'USA',
      creditCardNumber: '4111111111111111',
      creditCardExp: '12/24',
      creditCardCVV: '123',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

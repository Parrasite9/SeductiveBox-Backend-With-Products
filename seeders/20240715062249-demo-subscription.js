'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Subscriptions', [{
      userId: 1,
      preferences: 'Monthly delivery',
      version: '49.99',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Subscriptions', null, {});
  }
};

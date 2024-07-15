'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {
    static associate(models) {
      // define association here
    }
  }
  Subscription.init({
    userId: DataTypes.INTEGER,
    preferences: DataTypes.STRING,
    version: {
      type: DataTypes.ENUM,
      values: ['29.99', '49.99', '79.99']
    }
  }, {
    sequelize,
    modelName: 'Subscription',
  });
  return Subscription;
};

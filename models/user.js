'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    addressLine1: DataTypes.STRING,
    addressLine2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    country: DataTypes.STRING,
    creditCardNumber: DataTypes.STRING,
    creditCardExp: DataTypes.STRING,
    creditCardCVV: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

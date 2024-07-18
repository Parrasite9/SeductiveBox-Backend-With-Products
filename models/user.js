'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasMany(models.Purchase, { foreignKey: 'userId' });
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
    creditCardCVV: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8],
          msg: 'Password must be at least 8 characters long'
        },
        is: {
          args: /^(?=.*[A-Z])(?=.*\d)/,
          msg: 'Password must contain at least one capital letter and one number'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: async (user, options) => {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      }
    }
  });
  return User;
};

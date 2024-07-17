'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Variation extends Model {
    static associate(models) {
      Variation.belongsTo(models.Product, { foreignKey: 'productId', as: 'product' });
      Variation.hasMany(models.Image, { foreignKey: 'variationId', as: 'images' });
    }
  }
  Variation.init({
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Products',
        key: 'id'
      }
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    inventory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Variation',
  });
  return Variation;
};

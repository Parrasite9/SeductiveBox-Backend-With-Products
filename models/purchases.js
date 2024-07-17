'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Purchase extends Model {
    static associate(models) {
      Purchase.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
      Purchase.belongsTo(models.Product, { foreignKey: 'productId', as: 'product' });
      Purchase.belongsTo(models.Variation, { foreignKey: 'variationId', as: 'variation' });
    }
  }
  Purchase.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    variationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    purchaseDate: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Purchase',
  });
  return Purchase;
};

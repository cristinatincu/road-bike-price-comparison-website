'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductComparison extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductComparison.belongsTo(models.RoadBike, {
        foreignKey: 'road_bike_id',
        onDelete: 'CASCADE',

      });
    }
  }
  ProductComparison.init({
    size: DataTypes.STRING,
    url: DataTypes.STRING,
    color: DataTypes.STRING,
    price: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductComparison',
    tableName: 'product_comparison',
    timestamps: false
  });
  return ProductComparison;
};
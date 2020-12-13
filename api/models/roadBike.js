'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoadBike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RoadBike.hasMany(models.ProductComparison, {
        foreignKey: 'road_bike_id',
        as: 'roadBikes'
      })
    }
  };
  RoadBike.init({
    name: DataTypes.STRING,
    image_url: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RoadBike',
    tableName: 'road_bike',
    timestamps: false
  });

  return RoadBike;
};
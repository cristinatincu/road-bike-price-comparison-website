'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('product_comparison',
        'road_bike_id',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'road_bike',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('product_comparison');
  }
};
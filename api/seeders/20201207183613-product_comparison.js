'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('product_comparison', [{
      id: 1,
      size: 'S',
      url: 'specialized.html',
      color: 'Black',
      price: '£3,699.99',
      name: 'SPECIALIZED ALLEZ ELITE 2021',
      road_bike_id: 1
    },
    {
      id: 2,
      size: 'M',
      url: 'specialized.html',
      color: 'Black',
      price: '£3,699.99',
      name: 'SPECIALIZED ALLEZ ELITE 2021',
      road_bike_id: 1
    },
    {
      id: 3,
      size: 'M',
      url: 'cannondale.html',
      color: 'Black',
      price: '£999.99',
      name: 'CANNONDALE SUPERSIX EVO 2020',
      road_bike_id: 2
    },
    {
      id: 4,
      size: 'M',
      url: 'cannondale.html',
      color: 'Red',
      price: '£1,099.99',
      name: 'CANNONDALE SUPERSIX EVO 2020',
      road_bike_id: 2
    },
    {
      id: 5,
      size: 'M',
      url: 'cervelo.html',
      color: 'Red',
      price: '£1,099.99',
      name: 'CERVELO CALEDONIA 2021',
      road_bike_id: 3
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('product_comparison', null, {});
  }
};

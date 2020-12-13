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

    return queryInterface.bulkInsert('road_bike', [{
      id: 1,
      name: 'SPECIALIZED ALLEZ ELITE 2021',
      image_url: 'specialized_image_url.jpg',
      description: 'Specialized road bike'
    },
      {
        id: 2,
        name: 'CANNONDALE SUPERSIX EVO 2020',
        image_url: 'cannondale_image_url.jpg',
        description: 'Cannondale road bike'
      },
      {
        id: 3,
        name: 'CERVELO CALEDONIA 2021',
        image_url: 'cervelo_image_url.jpg',
        description: 'Cervelo road bike'
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('road_bike', null, {});
  }
};

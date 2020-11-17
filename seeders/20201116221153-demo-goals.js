'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Goals', [
      {
        name: 'lose 5 pounds',
        description: 'run 3 miles 3 time per week',
        targetDate: 'january 2021',
        userId: 1
      },
      {
        name: 'squat 315 pounds',
        description: 'add 5 pounds to squat PR per week',
        targetDate: 'march 2021',
        userId: 1
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

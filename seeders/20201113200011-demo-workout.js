'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Workouts', [
      {
        name: 'bench',
        sets: 4,
        reps: 10,
        weight: 225,
        userId: 1
      },
      {
        name: 'squat',
        sets: 3,
        reps: 8,
        weight: 315,
        userId: 1
      },
      {
        name: 'deadlift',
        sets: 5,
        reps: 6,
        weight: 405,
        userId: 1
      }
    ], {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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

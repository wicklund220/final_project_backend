'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('workouts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sets: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      reps: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      weight: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('workouts');
  }
};
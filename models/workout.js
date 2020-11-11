'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Workout.belongsTo(models.User, { foreignKey: 'userId' });
    }
  };
  Workout.init({
    name: DataTypes.STRING,
    sets: DataTypes.INTEGER,
    reps: DataTypes.INTEGER,
    weight: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Workout',
  });
  return Workout;
};
const Workout = require('../models').Workout;
const User = require('../models').User;

const constants = require('../constants');

const getWorkoutsByUser = (req, res) => {
    Workout.findAll({
        where: {
            userId: req.user.id
        },
        attributes: ['id', 'name', 'sets', 'reps', 'weight', 'userId'],
        // include: [{
        //     model: City
        // }]
    })
    .then(allWorkouts => {
        res.status(constants.SUCCESS).json(allWorkouts)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    getWorkoutsByUser,

}
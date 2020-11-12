const Workout = require('../models').Workout;
const User = require('../models').User;

const constants = require('../constants');

const getWorkoutsByUser = (req, res) => {
    // console.log(req)
    Workout.findAll({
        where: {
            userId: req.params.user
        },
        attributes: ['id', 'name', 'sets', 'reps', 'weight', 'userId'],
        // include: [{
        //     model: 
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
    getWorkoutsByUser
}
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

const createWorkout = (req, res) => {
    req.body.userId = req.params.user

    Workout.create(req.body)
    .then(newWorkout => {
        res.status(constants.SUCCESS).json(newWorkout)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const getWorkoutById = (req, res) => {
    // console.log(req.params.workoutId)
    Workout.findByPk(req.params.workoutId)
    .then(foundWorkout => {
        if(foundWorkout === null){
            res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Workout Id')
        }else{
            res.status(constants.SUCCESS).json(foundWorkout)
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    getWorkoutsByUser,
    createWorkout,
    getWorkoutById
}
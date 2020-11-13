const express = require('express');
const router = express.Router();
const controller = require('../controllers');


router.get('/:user', controller.workout.getWorkoutsByUser);
router.post('/:user', controller.workout.createWorkout);
router.get('/single/:workoutId', controller.workout.getWorkoutById)

module.exports = router;
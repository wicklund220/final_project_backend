const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.get('/user', controller.workout.getWorkoutsByUser);

module.exports = router;
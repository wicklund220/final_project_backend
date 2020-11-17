const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.get('/:user', controller.goal.getGoalsByUser);
router.get('/:user', controller.goal.createGoal);

module.exports = router;
const Goal = require('../models').Goal;
const User = require('../models').User;

const constants = require('../constants');

const getGoalsByUser = (req, res) => {
    // console.log(req)
    Goal.findAll({
        where: {
            userId: req.params.user
        },
        attributes: ['id', 'name', 'description', 'targetDate', 'userId'],
       
    })
    .then(allGoals => {
        res.status(constants.SUCCESS).json(allGoals)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const createGoal = (req, res) => {
    req.body.userId = req.user.id;

    Goal.create(req.body)
    .then(newGoal => {
        res.status(constants.SUCCESS).json(newGoal)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    getGoalsByUser,
    createGoal,
}
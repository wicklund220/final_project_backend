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
        // include: [{
        //     model: 
        // }]
    })
    .then(allGoals => {
        res.status(constants.SUCCESS).json(allGoals)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    getGoalsByUser,

}
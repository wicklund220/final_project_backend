const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.post('/signup', controller.auth.signup);
router.post('/login', controller.auth.login);
router.get('/', controller.auth.verifyUser);

module.exports = router;
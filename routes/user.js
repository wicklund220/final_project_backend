const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.get('/profile', controller.user.getProfile);
router.put('/profile', controller.user.editProfile);

module.exports = router;
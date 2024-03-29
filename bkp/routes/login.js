const express = require('express');
const router = express.Router();
const controller = require('../controllers/login');

router.route('/api/v1/login')
            .post(controller.login);

module.exports = router;
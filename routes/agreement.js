const express = require('express');
const router = express.Router();
const controller = require('../controllers/agreement');


router.route('/api/v1/agreement')
            .get(controller.getAll)
            .post(controller.add);

router.route('/api/v1/agreementsearch')
            .get(controller.search);

router.route('/api/v1/agreement/:id')
            .get(controller.getById)
            .put(controller.update)
            .delete(controller.remove);            

module.exports = router;

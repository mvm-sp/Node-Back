const express = require('express');
const router = express.Router();
const controller = require('../controllers/examprocedure');


router.route('/api/v1/examprocedure')
            .get(controller.getAll)
            .post(controller.add);

router.route('/api/v1/examproceduresearch')
            .get(controller.search);

router.route('/api/v1/examprocedure/:id')
            .get(controller.getById)
            .put(controller.update)
            .delete(controller.remove);            

module.exports = router;

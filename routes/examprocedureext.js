const express = require('express');
const router = express.Router();
const controller = require('../controllers/examprocedureext');


router.route('/api/v1/examprocedureext')
            .get(controller.getAll)
            .post(controller.add);

router.route('/api/v1/examprocedureextsearch')
            .get(controller.search);

router.route('/api/v1/examprocedureext/:id')
            .get(controller.getById)
            .put(controller.update)
            .delete(controller.remove);            

module.exports = router;

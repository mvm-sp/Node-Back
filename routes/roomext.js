const express = require('express');
const router = express.Router();
const controller = require('../controllers/roomext');


router.route('/api/v1/roomext')
            .get(controller.getAll)
            .post(controller.add);

router.route('/api/v1/roomextsearch')
            .get(controller.search);

router.route('/api/v1/roomext/:id')
            .get(controller.getById)
            .put(controller.update)
            .delete(controller.remove);            

module.exports = router;

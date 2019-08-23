const express = require('express');
const router = express.Router();
const controller = require('../controllers/modalityext');


router.route('/api/v1/modalityext')
            .get(controller.getAll)
            .post(controller.add);

router.route('/api/v1/modalityextsearch')
            .get(controller.search);

router.route('/api/v1/modalityext/:id')
            .get(controller.getById)
            .put(controller.update)
            .delete(controller.remove);            

module.exports = router;

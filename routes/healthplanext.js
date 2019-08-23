const express = require('express');
const router = express.Router();
const controller = require('../controllers/healthplanext');


router.route('/api/v1/healthplanext')
            .get(controller.getAll)
            .post(controller.add);

router.route('/api/v1/healthplanextsearch')
            .get(controller.search);

router.route('/api/v1/healthplanext/:id')
            .get(controller.getById)
            .put(controller.update)
            .delete(controller.remove);            

module.exports = router;

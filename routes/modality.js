const express = require('express');
const router = express.Router();
const controller = require('../controllers/modality');


router.route('/api/v1/modality')
            .get(controller.getAll)
            .post(controller.add);

router.route('/api/v1/modalitysearch')
            .get(controller.search);

router.route('/api/v1/modality/:id')
            .get(controller.getById)
            .put(controller.update)
            .delete(controller.remove);            

module.exports = router;

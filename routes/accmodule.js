const express = require('express');
const router = express.Router();
const controller = require('../controllers/accmodule');


router.route('/api/v1/accmodule')
            .get(controller.getAll)
            .post(controller.add);

router.route('/api/v1/accmodulesearch')
            .get(controller.search);

router.route('/api/v1/accmodule/:id')
            .get(controller.getById)
            .put(controller.update)
            .delete(controller.remove);            

module.exports = router;

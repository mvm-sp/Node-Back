const express = require('express');
const router = express.Router();
const controller = require('../controllers/agreementext');


router.route('/api/v1/agreementext')
            .get(controller.getAll)
            .post(controller.add);

router.route('/api/v1/agreementextsearch')
            .get(controller.search);

router.route('/api/v1/agreementext/:id')
            .get(controller.getById)
            .put(controller.update)
            .delete(controller.remove);            

module.exports = router;

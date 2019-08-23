const express = require('express');
const router = express.Router();
const controller = require('../controllers/companysector');


router.route('/api/v1/companysector')
            .get(controller.getAll)
            .post(controller.add);

router.route('/api/v1/companysectorsearch')
            .get(controller.search);

router.route('/api/v1/companysector/:id')
            .get(controller.getById)
            .put(controller.update)
            .delete(controller.remove);            

module.exports = router;

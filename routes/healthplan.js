const express = require('express');
const router = express.Router();
const controller = require('../controllers/healthplan');


router.route('/api/v1/healthplan')
            .get(controller.getAll)
            .post(controller.add);

router.route('/api/v1/healthplansearch')
            .get(controller.search);

router.route('/api/v1/healthplan/:id')
            .get(controller.getById)
            .put(controller.update)
            .delete(controller.remove);            

module.exports = router;

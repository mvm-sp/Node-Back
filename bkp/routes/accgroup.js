const express = require('express');
const router = express.Router();
const controller = require('../controllers/accgroup');


router.route('/api/v1/accgroup')
            .get(controller.getAll)
            .post(controller.add);

router.route('/api/v1/accgroup/:id')
            .get(controller.getById)
            .put(controller.update)
            .delete(controller.remove);            

module.exports = router;


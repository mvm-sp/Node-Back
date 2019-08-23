const express = require('express');
const router = express.Router();
const controller = require('../controllers/accgroupmodule');


router.route('/api/v1/accgroupmodule')
            .get(controller.getAll)
            .post(controller.add);

router.route('/api/v1/accgroupmodulesearch')
            .get(controller.search);

router.route('/api/v1/accgroupmodule/:id')
            .get(controller.getById)
            .put(controller.update)
            .delete(controller.remove);            

module.exports = router;

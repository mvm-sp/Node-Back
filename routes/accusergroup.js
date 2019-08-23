const express = require('express');
const router = express.Router();
const controller = require('../controllers/accusergroup');


router.route('/api/v1/accusergroup')
            .get(controller.getAll)
            .post(controller.add);

router.route('/api/v1/accusergroupsearch')
            .get(controller.search);

router.route('/api/v1/accusergroup/:id')
            .get(controller.getById)
            .put(controller.update)
            .delete(controller.remove);            

module.exports = router;

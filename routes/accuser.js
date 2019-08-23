const express = require('express');
const router = express.Router();
const controller = require('../controllers/accuser');


router.route('/api/v1/accuser')
            .get(controller.getAll)
            .post(controller.add);

router.route('/api/v1/accusersearch')
            .get(controller.search);

router.route('/api/v1/accuser/:id')
            .get(controller.getById)
            .put(controller.update)
            .delete(controller.remove);            

module.exports = router;

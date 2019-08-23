const express = require('express');
const router = express.Router();
const controller = require('../controllers/client');


router.route('/api/v1/client')
            .get(controller.getAll)
            .post(controller.add);

router.route('/api/v1/clientsearch')
.get(controller.search)
            
router.route('/api/v1/client/:id')
            .get(controller.getById)
            .put(controller.update)
            .delete(controller.remove);            

module.exports = router;


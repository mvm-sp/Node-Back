const express = require('express');
const router = express.Router();
const controller = require('../controllers/doctorext');


router.route('/api/v1/doctorext')
            .get(controller.getAll)
            .post(controller.add);
            
router.route('/api/v1/doctorextsearch')
            .get(controller.search)

router.route('/api/v1/doctorext/:id')
            .get(controller.getById)
            .put(controller.update)
            .delete(controller.remove);            

module.exports = router;


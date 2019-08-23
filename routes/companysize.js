const express = require('express');
const router = express.Router();
const controller = require('../controllers/companysize');


router.route('/api/v1/companysize')
            .get(controller.getAll)
            .post(controller.add);

router.route('/api/v1/companysizesearch')
            .get(controller.search);

router.route('/api/v1/companysize/:id')
            .get(controller.getById)
            .put(controller.update)
            .delete(controller.remove);            

module.exports = router;

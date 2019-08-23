const express = require('express');
const router = express.Router();
const controller = require('../controllers/companyregion');


router.route('/api/v1/companyregion')
            .get(controller.getAll)
            .post(controller.add);

router.route('/api/v1/companyregionsearch')
            .get(controller.search);

router.route('/api/v1/companyregion/:id')
            .get(controller.getById)
            .put(controller.update)
            .delete(controller.remove);            

module.exports = router;

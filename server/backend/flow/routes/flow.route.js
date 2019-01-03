const express = require('express');
const router = express.Router();
const flowController = require('../controllers/flow.controller');

router
    .post('/', flowController.createFlow);

router
    .get('/list', flowController.list);

router
    .get('/:flowID', flowController.getFlow)
    .put('/:flowID', flowController.updateFlow);

router
    .get('/user/:userEmail/list', flowController.listUserFlows);


module.exports = router;

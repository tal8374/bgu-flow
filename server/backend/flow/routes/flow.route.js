const express = require('express');
const router = express.Router();
const flowController = require('../controllers/flow.controller');

router
    .get('/list', flowController.list);

router
    .post('/', flowController.createFlow);

module.exports = router;

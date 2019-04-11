var express = require('express');
var router = express.Router();
const moduleController = require('../controllers/module.controller');

router
    .post('/module-event/:eventEvent', moduleController.eventLaunch);

module.exports = router;


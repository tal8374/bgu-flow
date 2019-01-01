var express = require('express');
var router = express.Router();
const bpjsController = require('../controllers/bpjs.controller');

router
    .post('/bpevent/:componentid', bpjsController.eventLaunch);

module.exports = router;

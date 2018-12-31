var express = require('express');
var router = express.Router();
const bpjsController = require('../controllers/bpjs.controller');

/* GET users listing. */
router.get('/list', bpjsController.list);

module.exports = router;

var express = require('express');
var router = express.Router();
const dashboardController = require('../controllers/dashboard.controller');

/* GET users listing. */
router.get('/list', dashboardController.list);

module.exports = router;

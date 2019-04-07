var express = require('express');
var router = express.Router();
const loginController = require('../controllers/login.controller');

router
    .post('/', loginController.login);

module.exports = router;

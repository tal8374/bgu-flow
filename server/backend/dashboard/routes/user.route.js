var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');

router
    .get('/user/', userController.list);

router
    .get('/user/:userEmail', userController.get)
    .put('/user/:userEmail', userController.update);

module.exports = router;

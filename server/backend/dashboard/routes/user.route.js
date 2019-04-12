var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');

router
    .get('/', userController.list);

router
    .get('/:userEmail', userController.get)
    .put('/:userEmail', userController.update);

module.exports = router;

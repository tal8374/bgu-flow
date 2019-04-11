var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');
const courseController = require('../controllers/course.controller');
const loginController = require('../controllers/login.controller');

router
    .get('/', userController.list);

router
    .get('/:userEmail', userController.get)
    .put('/:userEmail', userController.update);

router
    .get('/:email/course', courseController.list);

router
    .get('/:email/course/:courseId/partner', courseController.partnerList)
    .post('/:email/course/:courseId/partner', courseController.partnerCreate);

router
    .delete('/:email/course/:courseId/partner/:partnerEmail', courseController.partnerRemove);

router
    .post('/login', loginController.login);

module.exports = router;

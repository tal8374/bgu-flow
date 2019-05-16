var express = require('express');
var router = express.Router();
const dashboardController = require('../controllers/dashboard.controller');

router
    .get('/user/:userEmail/user-profile', dashboardController.getUserProfile)
    .put('/user/:userEmail/user-profile', dashboardController.updateUserProfile);

router
    .get('/user/:userEmail/user-course-partners/list', dashboardController.getUserCoursePartners)
    .get('/user/:userEmail/user-course-partners/:userPartnerID', dashboardController.getUserCoursePartner)
    .put('/user/:userEmail/user-course-partners/:userPartnerID', dashboardController.updateUserCoursePartner)
    .delete('/user/:userEmail/user-course-partners/:userPartnerID', dashboardController.deleteUserCoursePartner)

router
    .post('/login',dashboardController.logIn )

module.exports = router;

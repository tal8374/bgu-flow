const assignmentsController=require('../controllers/assignments');
const coursePartnersController= require('../controllers/coursePartners');
const coursesController=require('../controllers/courses');
const userCoursesController=require('../controllers/userCourses');
const userFlowController=require('../controllers/userFlow');
const userController=require('../controllers/users');
const express= require('express');
const router= express.Router();

// Assignments table
router
    .get('/assignments',assignmentsController.returnAll)
    .get('/assignments/:course_id', assignmentsController.courseAssigments)
    .post('/assignments/add',assignmentsController.addAssignment);

// course partner table
router
    .get('/coursePartners', coursePartnersController.allCoursesPartners)
    .post('/coursePartners/add', coursePartnersController.addNewPartner)
    .get('/coursePartners/:course_id/:user_email', coursePartnersController.usersPartner);

// courses table
router
    .get('/courses', coursesController.allCourses)
    .post('/courses/add', coursesController.addNewCourse)
    .get('/courses/:course_id/user', coursesController.allStudentsInCourse);

//userCourses table
router
    .get('/userCourses', userCoursesController.allUserCourses)
    .post('/userCourses/add', userCoursesController.addUsersCourse)
    .get('/userCourses/:user_email', userCoursesController.usersCourse);

//users table
router
    .get('/users', userController.allUsers)
    .post('/users/add', userController.addNewUser)
    .get('/users/:email', userController.userDetails);

// flows and userFlows table
router
    .get('/usersFlow', userFlowController.allUserFlows)
    .post('/usersFlow/add', userFlowController.addUserFlow);






module.exports = router;

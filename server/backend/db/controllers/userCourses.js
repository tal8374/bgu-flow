const express= require('express');
const router= express.Router();
//const db= require(appRoot + '/config/database');
const user= require('../models/Users');
const course= require('../models/Courses');
const User_Course=require('../models/User_Course');
const model=require('../models');

/**
 * return all the rows in table allUserCourses
 * @param empty req
 * @param res- all the rows in table allUserCourses
 */
function allUserCourses (req,res) {
    model.User_Course.findAll()
        .then(usersCourses => res.send(usersCourses))
        //res.sendStatus(200);})
        .catch(err => console.log(err));
}

/**
 * add new row to table userCourse
 * @param body- the req from the user so in the body (JSON.parse(Object.keys(body)[0])) with - course_name,  course_id,user_email
 * @returns {Promise<void>}
 */
async function addUsersCourse(body){
    const userCourse = JSON.parse(Object.keys(body)[0]);
    let course_name = userCourse.data.selectedCourse;
    let course_id = userCourse.data.courseId;
    let user_email = userCourse.data.userEmail;

    model.User_Course.create({
        user_email,
        course_id,
        course_name
    })
        .then(newUserCourse => res.redirect('/user_courses'))
        .catch(err => console.log);


}


/**
 * return all the courses of a user
 * @param req- user_email in req.params
 * @param res- all the course_id and course_name of courses a user sign to
 */
function usersCourse(req,res) {
const user_email= req.params.user_email;
    let courseID=[];
    if( user_email!=null) {
        model.User_Course.findAll({where: {user_email: user_email}, attributes: ['course_id'] ,raw: true})
            .then(function (Courses) {
                console.log(Courses);
                var data = Courses;
                data.forEach(function (course) {
                    courseID.push(course.course_id);
                })
            })
            //res.send(partners)})
            .then(function(){
                //console.log(users[0]);
                model.Courses.findAll({where : {course_id :  courseID}}).then (courses=> res.send(courses));
            })
            .catch(err => console.log(err));
    }
    else {
        console.log("no course_id or user email");
        res.sendStatus(200);
    }
}


module.exports= {
    allUserCourses,
    addUsersCourse,
    usersCourse,

};

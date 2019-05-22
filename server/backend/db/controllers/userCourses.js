const express= require('express');
const router= express.Router();
//const db= require(appRoot + '/config/database');
const user= require('../models/Users');
const course= require('../models/Courses');
const User_Course=require('../models/User_Course');
const model=require('../models');

//router.get('/', (req,res)=>
function allUserCourses (req,res) {
    model.User_Course.findAll()
        .then(usersCourses => res.send(usersCourses))
        //res.sendStatus(200);})
        .catch(err => console.log(err));
}

//router.post('/add', (req,res)=> {
async function addUsersCourse(body){
    const userCourse = JSON.parse(Object.keys(body)[0]);
    let course_name = userCourse.data.selectedCourse;
    let course_id = userCourse.data.courseId;
    let user_email = userCourse.data.userEmail;
    // console.log(req.body);
    // //console.log(req);
    // const data=req.body;
    //
    // if (data!=null){
    //     let {course_id, course_name}=data;
    // insert into table
    model.User_Course.create({
        user_email,
        course_id,
        course_name
    })
        .then(newUserCourse => res.redirect('/user_courses'))
        .catch(err => console.log);
    // console.log(req.body);
    // const data=req.body;
    // //console.log(data);
    // if (data!=null) {
    //     let {user_email, course_id} = data;
    //     console.log({user_email, course_id});
    //     // insert into table
    //     model.User_Course.create({
    //         user_email
    //         ,course_id})
    //         .then(newuserCourse => res.send('true'))
    //         .catch(err => res.send(err));
    // }
    // else
    //     {
    //         console.log(data);
    //         res.sendStatus(200);
    //     }

}
// return all the names and ids of some the courses of some user
//router.get('/:user_email', (req,res)=>{
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

const express= require('express');
const router= express.Router();
const db= require('../config/database');
const user= require('../models/Users');
const course= require('../models/Courses');
const userCourses=require('../models/User Course');

router.get('/', (req,res)=>
    userCourses.findAll()
        .then(usersCourses=>res.send(usersCourses))
        //res.sendStatus(200);})
        .catch(err=>console.log(err)));

router.post('/add', async(req,res)=> {
    //console.log(req.body);
    const data=req.body;
    //console.log(data);
    if (data!=null) {
        /*
        const course_id=data.course_id;
        const user_email=data.user_email;
        const courses = await course.findAll();
        if(course_id in courses){
            const users= await user.findAll();
        }
         */
        let {user_email, course_id} = data;
        console.log({user_email, course_id});
        // insert into table
        userCourses.create({
            user_email
            ,course_id})
            .then(newuserCourse => res.send('true'))
            .catch(err => res.send(err));
    }
    else
        {
            console.log(data);
            res.sendStatus(200);
        }

});

module.exports= router;

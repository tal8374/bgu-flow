const express= require('express');
const router= express.Router();
const db= require('../config/database');
const course= require('../models/Courses');
const userCourse= require('../models/User Course');
const user=require('../models/Users');

router.get('/', (req,res)=>
    course.findAll()
        .then(users=>res.send(users))
        //res.sendStatus(200);})
        .catch(err=>console.log(err)));

//add new record to users table
router.post('/add', (req,res)=> {
    console.log(req.body);
    //console.log(req);
    const data=req.body;

    if (data!=null){
        let {course_id, course_name}=data;
        // insert into table
        course.create({
            course_id,
            course_name
        })
            .then(newCourse=>res.redirect('/courses'))
            .catch(err=>console.log);}
    else{
        console.log("no data to add");
        res.sendStatus(200);}
});

// select users by his email
router.get('/:course_id',(req,res)=>{
    //console.log(req.params.course_id);
    const data=req.params.course_id;
    console.log(data);
    if(data!=null) {
        course.findByPrimary(data)
            .then(specificCourse => res.send(specificCourse))
            .catch(err => console.log(err));
    }
    else {
        console.log("no course_id");
        res.sendStatus(200);
    }
});

router.get('/:course_id/user',async (req,res)=> {

    const course_id = req.params.course_id;
    /*const users_id = */ userCourse.findAll({where: {course_id:course_id}, raw:true},)
        .then(result=> {
            var users=[];
           for(var i=0; i<result.length;i++){
               users[i]=result[i].user_email;
           }
           return users;
        })
        .then(function(users){
            user.findAll(({where: {email:users}, raw:true})).then(result=>res.send(result));
        })

});



module.exports= router;

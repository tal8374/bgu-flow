const express= require('express');
const router= express.Router();
//const db= require(appRoot + '/config/database');
const course= require('../models/Courses');
const userCourse= require('../models/User_Course');
const user=require('../models/Users');
const model=require('../models');


//return all the information in courses table
//router.get('/', (req,res)=>
function allCourses (req,res) {
    model.Courses.findAll()
        .then(users => res.send(users))
        //res.sendStatus(200);})
        .catch(err => console.log(err));
}

//add new record to courses table
//router.post('/add', (req,res)=>
function addNewCourse(req,res){
    console.log(req.body);
    //console.log(req);
    const data=req.body;

    if (data!=null){
        let {course_id, course_name}=data;
        // insert into table
        model.Courses.create({
            course_id,
            course_name
        })
            .then(newCourse=>res.redirect('/courses'))
            .catch(err=>console.log);}
    else{
        console.log("no data to add");
        res.sendStatus(200);}
}

// return the name of course by his id
router.get('/:course_id',(req,res)=>{
    //console.log(req.params.course_id);
    const data=req.params.course_id;
    console.log(data);
    if(data!=null) {
        model.Courses.findByPrimary(data)
            .then(specificCourse => res.send(specificCourse))
            .catch(err => console.log(err));
    }
    else {
        console.log("no course_id");
        res.sendStatus(200);
    }
});


//return the name of all the students that sign to cepecific course
//router.get('/:course_id/user',async (req,res)=> {
async function allStudentsInCourse (req,res) {
    const course_id = req.params.course_id;
    /*const users_id = */ model.User_Course.findAll({where: {course_id:course_id}, raw:true},)
        .then(result=> {
            var users=[];
           for(var i=0; i<result.length;i++){
               users[i]=result[i].user_email;
           }
           return users;
        })
        .then(function(users){
            model.Users.findAll(({where: {email:users}, raw:true})).then(result=>res.send(result));
        })

}



module.exports= {
    allCourses,
    addNewCourse,
    allStudentsInCourse,


};

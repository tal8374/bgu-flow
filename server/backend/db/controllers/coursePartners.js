const express= require('express');
const router= express.Router();
const model=require('../models');
let partners;
let i;

/**
 * function that return all the rows in all coursesPartners table
 * @param empty req
 * @param  res with  all coursesPartners table
 */
function allCoursesPartners (req,res) {
    model.Course_Partners.findAll()
        .then(users => res.send(users))
        //res.sendStatus(200);})
        .catch(err => console.log(err));
}

/**
 * function that return all the rows in all coursesPartners table
 * @param req with details of the ne partner :  user_email, course, partner_email
 * @param  res with  all coursesPartners table
 */
async function addNewPartner(req,res){
    //console.log(req.body);
    const data=req.body;
    //console.log(data);
    if (data!=null) {
        console.log(data);
        let {user_email, course, partner_email} = data;
        console.log({user_email, course, partner_email});
        // insert into table
        model.Course_Partners.create({user_email, course, partner_email})
            .then(newassignment => res.send('true'))
            .catch(err => res.send(err));
    }
    else
    {
        console.log(data);
        res.sendStatus(200);
    }

}

/**
 * return all the partners of a user in certain course
 * @param req with the course_id and user_id in the params
 * @param res all the partners details
 */
function usersPartner(req,res){
    //console.log(req.params.course_id);
    const course_id=req.params.course_id;
    const user_email= req.params.user_email;
    partners=[];
    let users=[];
    i=0;
    if(course_id!=null && user_email!=null) {
        model.Course_Partners.findAll({where: {course: course_id , user_email: user_email}, attributes: ['partner_email'],raw: true})
            .then(function (CoursePartners) {
                var data = CoursePartners;
                data.forEach(function (partner) {
                    users.push(partner.partner_email);
                })
            })
                //res.send(partners)})
            .then(function(){
                console.log(users[0]);
                model.Users.findAll({where : {email :  users}}).then (partnerss=> res.send(partnerss));
            })
            .catch(err => console.log(err));
    }
    else {
        console.log("no course_id or user email");
        res.sendStatus(200);
    }
}



module.exports= {
    allCoursesPartners,
    addNewPartner,
    usersPartner,
};

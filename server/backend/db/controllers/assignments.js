const express= require('express');
const router= express.Router();
//const db= require('../config/database');
const assignment= require('../models/Assignments');
const model=require('../models');


/**
 * fucntion that return all the rows in Assignment table
 * @param req from the user
 * @returns {Promise<void>}
 */
function returnAll (req,res){
    model.Assignments.findAll()
        .then(users=>res.send(users))
        //res.sendStatus(200);})
        .catch(err=>console.log(err));
}



/**
 * fucntion that return all the rows in Assignment table
 * @param req from the user
 * @returns {Promise<void>}
 */
function courseAssigments(req, res){
    console.log(req.params.course_id);
    const data=req.params.course_id;
    if(data!=null) {
        model.Assignments.find({where: {course_id:data}})
            .then(specificCourse => res.send(specificCourse))
            .catch(err => console.log(err));
    }
    else {
        console.log("no course_id");
        res.sendStatus(200);
    }
}


/**
 * fucntion that add new rows to assigments table
 * @param req that contain in the body :
 * assignment_id
 * course_id
 * course_name
 * assignment_name
 * due_date
 * @returns {Promise<void>}
 */
async function addAssignment (data){
    const assignment = JSON.parse(Object.keys(data)[0]);
    let assignment_id = assignment.data.AssignmentId;
    let course_id = assignment.data.CourseId;
    let course_name = assignment.data.selectedCourse;
    let assignment_name = assignment.data.AssignmentName;
    let due_date = assignment.data.dueDate;
    model.Assignments.create({
        assignment_id,
        course_id,
        assignment_name,
        course_name,
        due_date
    })
        .then(newAssignment => res.redirect('/assignments'))
        .catch(err => console.log);



    //console.log(req.body);
    // const data=req.body;
    // //console.log(data);
    // if (data!=null) {
    //     /*
    //     const course_id=data.course_id;
    //     const user_email=data.user_email;
    //     const courses = await course.findAll();
    //     if(course_id in courses){
    //         const users= await user.findAll();
    //     }
    //      */
    //     console.log(data);
    //     let {assignment_id, course_id, name, due_date} = data;
    //     console.log({assignment_id, course_id, name, due_date});
    //     // insert into table
    //     model.Assignments.create({assignment_id, course_id, name, due_date})
    //         .then(newassignment => res.send('true'))
    //         .catch(err => res.send(err));
    // }
    // else
    // {
    //     console.log(data);
    //     res.sendStatus(200);
    // }

}

module.exports= {
    returnAll,
    courseAssigments,
    addAssignment,
};

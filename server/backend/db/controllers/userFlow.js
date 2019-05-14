const express= require('express');
const router= express.Router();
const model=require('../models');


//router.get('/', (req,res)=>
function allUserFlows(req, res) {
    model.User_Flows.findAll()
        .then(usersCourses => res.send(usersCourses))
        //res.sendStatus(200);})
        .catch(err => console.log(err))
}

//router.post('/add', (req,res))=>
function addUserFlow (req, res){
    const flow_id= req.body.flow_id;
    const flow_data= req.body.data;
    const creationDate= req.body.creationDate;
    const lastModified= req.body.lastModified;
    const email= req.body.user_email;

    let flow= {
        flow_id: flow_id,
        data: flow_data,
        creation_date: creationDate,
        last_modified: lastModified
    };
     let userFlow= {
         flow_id: flow_id,
         user_email: email
     };
    console.log(flow);
    console.log(userFlow);
     if(req.body!=null){
         model.Flows.create(flow)
             .then ( function(){
                 model.User_Flows.create(userFlow)
                     .then (res.send(true))
                     .catch(err=>console.log);

             })
             .catch(err=>console.log);

     }
}

module.exports={
    allUserFlows,
    addUserFlow
}

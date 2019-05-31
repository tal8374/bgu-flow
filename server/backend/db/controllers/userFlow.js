const express= require('express');
const router= express.Router();
const model=require('../models');


/**
 * return all the rowd from table UserFlows
 * @param req
 * @param res- all the rows in UserFlows
 */
function allUserFlows(req, res) {
    model.User_Flows.findAll()
        .then(usersCourses => res.send(usersCourses))
        //res.sendStatus(200);})
        .catch(err => console.log(err))
}

/**
 * add a new flow to userFlows table and to Flows table
 * @param req- all the flow details and email user in the body- flow_id, flow_data, creationDate, lastModified, email
 * @param res
 */
function addUserFlow (req, res){
    const details = JSON.parse(Object.keys(data)[0]);
    const flow_id= details.data.flow_id;
    const flow_data= details.data.data;
    const creationDate= details.data.creationDate;
    const lastModified= details.data.lastModified;
    const email= details.data.user_email;

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

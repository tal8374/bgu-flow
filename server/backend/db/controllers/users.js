const express= require('express');
const router= express.Router();
//const db= require('../config/database');
const model=require('../models');

// get all the users
//router.get('/', (req,res)=>
function allUsers(req,res) {
        model.Users.findAll()
            .then(users => res.send(users))
            //res.sendStatus(200);})
            .catch(err => console.log(err));
}

//add new record to users table
//router.post('/add', (req,res)=> {
async function addNewUser (body){
        const user = JSON.parse(Object.keys(body)[0]);
        let email = user.data.userEmail;
        let user_name = user.data.userName;
        let first_name = user.data.userFirstName;
        let last_name = user.data.userLastName;
        let phone_number = "";
        // console.log(req.body);
        // //console.log(req);
        // const data=req.body;
        //
        // if (data!=null){
        // let { email,first_name,last_name,phone_number}=data;
        // insert into table
        model.Users.create({
                email,
                user_name,
                first_name,
                last_name,
                phone_number,
        })
            .then(newUser=>res.redirect('/users'))
            .catch(err=>console.log);
        // else{
        //         console.log(data);
        //         res.sendStatus(200);}
}

// select users by his email
//router.get('/findUser/:email',(req,res)=>{
function userDetails (req,res)
{
        const data=req.params.email;
        if(data!=null) {
                model.Users.findByPrimary(data)
                    .then(specificUser => res.send(specificUser))
                    .catch(err => console.log(err));
        }
}


module.exports={
        allUsers,
        addNewUser,
        userDetails,

};

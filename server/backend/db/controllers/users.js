const express= require('express');
const router= express.Router();
//const db= require('../config/database');
const model=require('../models');

/**
 * return all the users in the db
 * @param req
 * @param res
 */
function allUsers(req,res) {
        model.Users.findAll()
            .then(users => res.send(users))
            //res.sendStatus(200);})
            .catch(err => console.log(err));
}

//add new record to users table
/**
 * add new user to the users table
 * @param body- all the user detail in body - email, user_name, first_name, last_name, phone_number
 * @returns {Promise<void>}
 */
async function addNewUser (body){
        const user = JSON.parse(Object.keys(body)[0]);
        let email = user.data.userEmail;
        let user_name = user.data.userName;
        let first_name = user.data.userFirstName;
        let last_name = user.data.userLastName;
        let phone_number = "";
        model.Users.create({
                email,
                user_name,
                first_name,
                last_name,
                phone_number,
        })
            .then(newUser=>res.redirect('/users'))
            .catch(err=>console.log);
}

/**
 * return all the user details by his email
 * @param req- the user email
 * @param res
 */
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

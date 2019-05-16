var bpjsServices = require('../services/dashboard.service');

function getUserProfile(req, res) {
    let userEmail = req.params.userEmail;

    let userProfile = bpjsServices.getUserProfile(userEmail);

    return res.send(JSON.stringify(userProfile));
}

function updateUserProfile(req, res) {
    let userEmail = req.params.userEmail;
    let userNewProfile = req.body.userNewProfile;

    bpjsServices.updateUserProfile(userEmail, userNewProfile);

    return res.send("User profile was updated.");
}

function getUserCoursePartners(req, res) {
    let userEmail = req.params.userEmail;
    let courseID = req.params.courseID;

    bpjsServices.getUserCoursePartners(userEmail, courseID);

    return res.send("User partner was added.");
}

function updateUserCoursePartner(req, res) {
    let userEmail = req.params.userEmail;
    let courseID = req.params.courseID;
    let userPartnerID = req.params.userPartnerID;
    let userNewPartnerPayload = req.body.userNewPartner;

    bpjsServices.updateUserCoursePartner(userEmail, courseID, userPartnerID, userNewPartnerPayload);

    return res.send("User partner was added.");
}

function getUserCoursePartner(req, res) {
    let userEmail = req.params.userEmail;
    let courseID = req.params.courseID;
    let userPartnerID = req.params.userPartnerID;

    let userPartnerPayload = bpjsServices.getUserCoursePartner(userEmail, courseID, userPartnerID);

    return res.send(JSON.stringify(userPartnerPayload));
}

function deleteUserCoursePartner(req, res) {
    let userEmail = req.params.userEmail;
    let courseID = req.params.courseID;
    let userPartnerID = req.params.userPartnerID;

    bpjsServices.deleteUserCoursePartner(userEmail, courseID, userPartnerID);

    return res.send("User partner was deleted");
}
function logIn(req, res){
    usernameToCheck = req.body.email;
    pwdToCheck = req.body.password;
    console.log(usernameToCheck);
    console.log(pwdToCheck);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'http://bgu-cc-msdb.bgu.ac.il/BguAuthWebService/AuthenticationProvider.asmx?op=validateUser', true);
    var sr = '<?xml version="1.0" encoding="utf-8"?>' +
        '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<soap:Body>' +
        '<validateUser xmlns="http://bgu-cmsdeploy.bgu.ac.il/">' +
        '<uname>' + usernameToCheck + '</uname>' +
        '<pwd>' + pwdToCheck + '</pwd>' +
        '</validateUser>' +
        '</soap:Body>' +
        '</soap:Envelope>';

   xmlhttp.onreadystatechange = function () {
        console.log("here");
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                console.log(xmlhttp.responseText);
                var start=xmlhttp.responseText.indexOf('<validateUserResult>');
                var end=xmlhttp.responseText.indexOf('</validateUserResult>');
                console.log(xmlhttp.responseText.substring(start+20,end));
                var response=xmlhttp.responseText.substring(start+20,end);
                if(response=='true')
                    console.log("succes");
                // alert('done. use firebug/console to see network response');
            }
        }
    };
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
}


module.exports = {
    getUserProfile,

    updateUserProfile,

    getUserCoursePartners,

    updateUserCoursePartner,

    getUserCoursePartner,

    deleteUserCoursePartner,

    logIn,

};

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

module.exports = {
    getUserProfile,

    updateUserProfile,

    getUserCoursePartners,

    updateUserCoursePartner,

    getUserCoursePartner,

    deleteUserCoursePartner,

};

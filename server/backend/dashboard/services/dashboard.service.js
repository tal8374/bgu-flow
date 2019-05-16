function getUserProfile(userEmail){
    console.log("returns the user profile");
}

function updateUserProfile(userEmail, userNewProfile){
    console.log("updates the user profile");
}

function getUserCoursePartners(userEmail, courseID, userNewPartnerPayload){
    console.log("Added partner to the user course");
}

function updateUserCoursePartner(userEmail, courseID, userPartnerID, userNewPartnerPayload){
    console.log("Updated partner to the user course");
}

function getUserCoursePartner(userEmail, courseID, userPartnerID){
    console.log("Added partner to the user course");
}

function deleteUserCoursePartner(userEmail, courseID, userPartnerID){
    console.log("Deleted partner to the user course");
}



module.exports = {
    getUserProfile,

    updateUserProfile,

    getUserCoursePartners,

    updateUserCoursePartner,

    getUserCoursePartner,

    deleteUserCoursePartner,


};

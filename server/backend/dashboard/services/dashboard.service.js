/**
 * Getting usere's profile
 * @param userEmail
 */
function getUserProfile(userEmail){
    console.log("returns the user profile");
}

/**
 * Updating user's profile
 * @param userEmail
 * @param userNewProfile
 */
function updateUserProfile(userEmail, userNewProfile){
    console.log("updates the user profile");
}

/**
 * Getting user's profile
 * @param userEmail
 * @param courseID
 * @param userNewPartnerPayload
 */
function getUserCoursePartners(userEmail, courseID, userNewPartnerPayload){
    console.log("Added partner to the user course");
}

/**
 * Updating user
 * s course partner
 * @param userEmail
 * @param courseID
 * @param userPartnerID
 * @param userNewPartnerPayload
 */
function updateUserCoursePartner(userEmail, courseID, userPartnerID, userNewPartnerPayload){
    console.log("Updated partner to the user course");
}

/**
 * Getting user's course partner
 * @param userEmail
 * @param courseID
 * @param userPartnerID
 */
function getUserCoursePartner(userEmail, courseID, userPartnerID){
    console.log("Added partner to the user course");
}

/**
 * deleting user's course partner
 * @param userEmail
 * @param courseID
 * @param userPartnerID
 */
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

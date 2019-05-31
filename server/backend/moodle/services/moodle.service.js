const dbCourses = require("../../db/controllers/courses");
const dbAssignments = require("../../db/controllers/assignments");
const dbForumMessages = require("../../db/controllers/forums");
const dbUsers = require("../../db/controllers/users");
const dbUserCourses = require("../../db/controllers/userCourses");
const dbAnnouncements = require("../../db/controllers/announcements");



const request = require('request');

const handlers = {
    'AssignmentAdded': assignment,
    'AnnouncementAdded': announcement,
    'ForumMessageAdded': forumMessage,
    'CourseAdded': course,
    'UnitAdded': unit,
    'Assignment24HoursAlert': assignmentAlert,
    'Assignment60MinutesAlert': assignmentAlert,
    'Assignment10MinutesAlert': assignmentAlert,
    'AssignmentHalfTimeAlert': assignmentAlert,
    'User': user
};

function eventLaunch(req) {
    var eventName = req.params.eventEvent;
    handlers[eventName](req.body);
}

/**
 * add course to course table and courses user table
 * @param body
 */
function course(body) {
    dbCourses.addNewCourse(body);
    dbUserCourses.addUsersCourse(body);
    console.log(JSON.parse(Object.keys(body)[0]));
}

/**
 * send assignment event to bpjs and add assignment to assignments table
 * @param body
 */
function assignment(body){
    dbAssignments.addAssignment(body);
    console.log(JSON.parse(Object.keys(body)[0]));

    request.post(
        'http://localhost:7000/insert-event',
        {json: JSON.parse(Object.keys(body)[0])},
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
            }
        }
    );


}

/**
 * send announcement event to bpjs and add announcement to announcements table
 * @param body
 */
function announcement(body){
    dbAnnouncements.addAnnouncement(body);
    console.log(JSON.parse(Object.keys(body)[0]));

    request.post(
        'http://localhost:7000/insert-event',
        {json: JSON.parse(Object.keys(body)[0])},
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
            }
        }
    );
}

/**
 * send forum message event to bpjs and add forum message to forum messages table
 * @param body
 */
function forumMessage(body){
    dbForumMessages.addNewForumMessage(body);
    console.log(JSON.parse(Object.keys(body)[0]));

    request.post(
        'http://localhost:7000/insert-event',
        {json: JSON.parse(Object.keys(body)[0])},
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
            }
        }
    );
}

/**
 * send new lecture event to bpjs
 * @param body
 */
function unit(body){
    console.log(JSON.parse(Object.keys(body)[0]));

    request.post(
        'http://localhost:7000/insert-event',
        {json: JSON.parse(Object.keys(body)[0])},
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
            }
        }
    );
}

/**
 * add user to users table
 * @param body
 */
function user(body){
    dbUsers.addNewUser(body);
    console.log(JSON.parse(Object.keys(body)[0]));
}

/**
 * send assignment alert event to bpjs
 * @param body
 */
function assignmentAlert(body){
    console.log(JSON.parse(Object.keys(body)[0]));

    request.post(
        'http://localhost:7000/insert-event',
        {json: JSON.parse(Object.keys(body)[0])},
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
            }
        }
    );
}

module.exports = {
    eventLaunch
};

const request = require('request');

const handlers = {
    'AssignmentAdded': assignment,
    'AnnouncementAdded': announcement,
    'ForumMessageAdded': forumMessage,
    'CourseAdded': course,
    'UnitAdded': unit
};

function eventLaunch(req) {
    var eventName = req.params.eventEvent;
    handlers[eventName](req.body);
}

function course(body) {
    console.log(JSON.parse(Object.keys(body)[0]));

    // request.post(
    //     'http://localhost:7000/insert-event',
    //     {json: JSON.parse(Object.keys(body)[0])},
    //     function (error, response, body) {
    //         if (!error && response.statusCode == 200) {
    //         }
    //     }
    // );
}

function assignment(body){
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

function announcement(body){
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

function forumMessage(body){
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

module.exports = {
    eventLaunch
};

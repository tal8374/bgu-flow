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
    // obj = {
    //     name: '',
    //
    // }
    //
    // newObj = {
    //     name: '',
    //     data: {}
    // }
    //
    // for(let key of obj){
    //     if(key === 'name') {
    //         newObj['eventName'] = obj['name']
    //     } else {
    //         newObj['data'][key] = obj[key]
    //
    //     }
    // }


    request.post(
        'http://localhost:7000/insert-event',
        {json: body},
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
            }
        }
    );
}

function assignment(body){
    request.post(
        'http://localhost:7000/save',
        {json: body},
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
            }
        }
    );
}

function announcement(body){
    request.post(
        'http://localhost:7000/save',
        {json: body},
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
            }
        }
    );
}

function forumMessage(body){
    request.post(
        'http://localhost:7000/save',
        {json: body},
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
            }
        }
    );
}

function unit(body){
    request.post(
        'http://localhost:7000/save',
        {json: body},
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
            }
        }
    );
}

module.exports = {
    eventLaunch
};

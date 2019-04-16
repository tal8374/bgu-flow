var moodleService = require('../services/moodle.service');

function eventLaunch(req, res) {
    moodleService.eventLaunch(req);

    res.send('');
}

module.exports = {
    eventLaunch,

};

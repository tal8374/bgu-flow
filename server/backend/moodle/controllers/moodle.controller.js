var moodleService = require('../services/moodle.service');

/**
 * send moodle events to bpjs
 * @param req
 * @param res
 */
function eventLaunch(req, res) {
    moodleService.eventLaunch(req);

    res.send('');
}

module.exports = {
    eventLaunch,

};

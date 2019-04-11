var moduleService = require('../services/module.service');

function eventLaunch(req, res) {
    moduleService.eventLaunch(req);

    res.send('');
}

module.exports = {
    eventLaunch,
};

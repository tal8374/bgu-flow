var iftttService = require('../services/ifttt.service');

function eventLaunch(req, res) {
    let flowID = req.params.flowid;

    flowPayload = {
        to: 'anatolyi@post.bgu.ac.il',
        title: 'some title',
        message: 'some message'
    };

    iftttService.handleEvent({
        flowID: flowID,
        flowPayload: flowPayload
    });

    return res.send('respond with ' + flowID);
}

module.exports = {
    eventLaunch,

};

var iftttService = require('../services/ifttt.service');

function eventLaunch(req, res) {
    // TODO: The name of the event, getting the id from the bpjs and then getting the name from the db.
    let componentID = req.params.componentID;

    console.log("Received from the bpjs server event id " + componentID);

    let payload = {
        componentID: componentID,
        body: req.body
    };

    iftttService.handleEvent(payload);

    return res.send('respond with ' + componentID);
}

module.exports = {
    eventLaunch,

};
var iftttService = require('../services/ifttt.service');

function eventLaunch(req, res) {
    // TODO: The name of the event, getting the id from the bpjs and then getting the name from the db.
    console.log("in eventLanch   ", req.params.componentID);
    let componentID = req.params.componentID;

    console.log("Received from the bpjs server event id " + componentID + ' and payload ');

    let payload = {
        componentID: componentID,
        data: JSON.parse(Object.keys(req.body)[0])
    };

    iftttService.handleEvent(payload);

    return res.send('respond with ' + componentID);
}

module.exports = {
    eventLaunch,

};

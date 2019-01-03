const {createBPProgram} = require('../../bpjs/services/bpjs.service');

function getFlows() {
    console.log('Getting all the flows');
}

function getUserFlows(userEmail) {
    console.log('Getting all the user flows');
}

function getFlow(flowID) {
    console.log('Getting flow');
}

function createFlow(req) {
    let flowComponentsData = req.body.nodesPayload;
    console.log(flowComponentsData);
    // TODO: get flow id after creating instance in the db.
    let flowID = 1;

    let payload = {
        flowComponentsData,
        flowID
    };

    createBPProgram(payload);
}

function updateFlow(flowID) {
    console.log('updating flow');
}

module.exports = {
    getFlows,

    createFlow,

    getUserFlows,

    getFlow,

    updateFlow,

};

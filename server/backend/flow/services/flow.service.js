const {createBPProgram} = require('../../bpjs/services/bpjs.service');

function getFlows() {
    console.log('example of service which getting all the flows')
}

function createFlow(req) {
    let flowComponentsData = req.body.nodesPayload;
    // TODO: get flow id after creating instance in the db.
    let flowID = 1;

    let payload = {
        flowComponentsData,
        flowID
    };

    createBPProgram(payload);
}

module.exports = {
    getFlows,

    createFlow,

};

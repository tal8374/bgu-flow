const {createBPProgram} = require('../../bpjs/services/bpjs.service');

function getFlows() {
    console.log('example of service which getting all the flows')
}

function createFlow(req) {
    let flowData = req.body;
    let flowID = 1;

    let payload = {
        flowData,
        flowID
    };

    createBPProgram(payload);
}

module.exports = {
    getFlows,

    createFlow,

};

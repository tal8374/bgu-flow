const {createBPProgram} = require('../../bpjs/services/bpjs.service');


/**
 * Getting all flows
 */
function getFlows() {
    console.log('Getting all the flows');
}

/**
 * Getting user's flows
 * @param userEmail
 */
function getUserFlows(userEmail) {
    console.log('Getting all the user flows');
}

/**
 * Getting a flow
 * @param flowID
 */
function getFlow(flowID) {
    console.log('Getting flow');
}

/**
 * Creating a flow
 * @param req
 */
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

/**
 * Updating a flow
 * @param flowID
 */
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

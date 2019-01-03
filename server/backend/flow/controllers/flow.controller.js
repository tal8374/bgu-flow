const flowServices = require('../services/flow.service');

function list(req, res) {
    flowServices.getFlows();

    return res.send('respond with a list of flows');
}

function createFlow(req, res) {
    flowServices.createFlow(req);

    return res.send('flow was created successfully');
}

function listUserFlows(req, res) {
    let userEmail = req.params.userEmail;

    let userFlows = flowServices.getUserFlows(userEmail);

    return res.send(JSON.stringify(userFlows));
}

function getFlow(req, res) {
    let flowID = req.params.flowID;

    let userFlow = flowServices.getFlow(flowID);

    return res.send(JSON.stringify(userFlow));
}

function updateFlow(req, res) {
    let flowID = req.params.flowID;

    flowServices.updateFlow(flowID);

    return res.send('flow was updated successfully');
}

module.exports = {
    list,

    createFlow,

    listUserFlows,

    getFlow,

    updateFlow,
};

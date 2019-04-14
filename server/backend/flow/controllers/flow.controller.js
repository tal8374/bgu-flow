const flowServices = require('../services/flow.service');
const request = require('request');

function list(req, res) {
    flowServices.getFlows();

    return res.send('respond with a list of flows');
}

function createFlow(req, res) {
    console.log(req.body)

    request.post(
        'http://localhost:7000/save',
        {json: req.body},
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log(body)
            }
        }
    );

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

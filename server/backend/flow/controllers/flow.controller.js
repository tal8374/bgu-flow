const flowServices = require('../services/flow.service');
const request = require('request');

/**
 * Getting all the flows
 * @param req
 * @param res
 * @returns {*|void|boolean}
 */
function list(req, res) {
    flowServices.getFlows();

    return res.send('respond with a list of flows');
}

/**
 * Creating a new flow
 * @param req
 * @param res
 * @returns {*|void|boolean}
 */
function createFlow(req, res) {
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

/**
 * Getting all user's flows
 * @param req
 * @param res
 * @returns {*|void|boolean}
 */
function listUserFlows(req, res) {
    let userEmail = req.params.userEmail;

    let userFlows = flowServices.getUserFlows(userEmail);

    return res.send(JSON.stringify(userFlows));
}

/**
 * Getting a flow
 * @param req
 * @param res
 * @returns {*|void|boolean}
 */
function getFlow(req, res) {
    let flowID = req.params.flowID;

    let userFlow = flowServices.getFlow(flowID);

    return res.send(JSON.stringify(userFlow));
}

/**
 * Updating a flow
 * @param req
 * @param res
 * @returns {*|void|boolean}
 */
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

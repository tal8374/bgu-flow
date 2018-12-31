const flowServices = require('../services/flow.service');

function list(req, res) {
    flowServices.getFlows();

    return res.send('respond with a list of flows');
}

function createFlow(req, res) {
    flowServices.createFlow(req);

    return res.send('flow was created successfully');
}

module.exports = {
    list,

    createFlow,
};

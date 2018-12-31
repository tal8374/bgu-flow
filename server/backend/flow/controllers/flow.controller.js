var flowServices = require('../services/flow.service');

function list(req, res) {
    flowServices.getFlows();

    return res.send('respond with a list of flows');
}

module.exports = {
    list,

};

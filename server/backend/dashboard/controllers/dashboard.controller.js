var bpjsServices = require('../services/dashboard.service');

function list(req, res) {
    return res.send('respond with a list of dashboard');
}

module.exports = {
    list,

};

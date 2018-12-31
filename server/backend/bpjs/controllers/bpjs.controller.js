var bpjsServices = require('../services/bpjs.service');

function list(req, res) {
    return res.send('respond with a list of bpjs');
}

module.exports = {
    list,

};

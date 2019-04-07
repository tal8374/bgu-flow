const loginServices = require('../services/login.service');

function login(req, res){
    loginServices.login({req: req});

    res.send(true);
}

module.exports = {
    login,
};

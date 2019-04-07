const userServices = require('../services/user.service');

function list(req, res){
    let users = userServices.list({req: req});

    res.send(users);
}

function get(req, res){
    let user = userServices.get({req: req});

    res.send(user);
}

function update(req, res){
    userServices.update({req: req});

    res.send(true);
}

module.exports = {
    list,

    get,

    update,
};

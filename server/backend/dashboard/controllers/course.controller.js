const courseServices = require('../services/course.service');

function list(req, res){
    console.log('here')
    let courses = courseServices.list({req: req});

    res.send({courses: courses});
}

function partnerList(req, res){
    let courseTeamMembers = courseServices.partnerList({req: req});

    res.send({courseTeamMembers: courseTeamMembers});
}

function partnerRemove(req, res){
    courseServices.partnerRemove({req: req});

    res.send(true);
}

function partnerCreate(req, res){
    courseServices.partnerCreate({req: req});

    res.send(true);
}


module.exports = {
    list,

    partnerList,

    partnerRemove,

    partnerCreate,
};

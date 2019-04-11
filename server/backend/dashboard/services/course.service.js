function list(payload){
    return ['Course1', 'Course2', 'Course 3']
}

function partnerList(payload){
    return ['email1@gmail.com', 'email2@gmail.com']
}

function partnerRemove(payload){
    const partnerEmail = payload.req.params.partnerEmail;

    console.log(partnerEmail)
}

function partnerCreate(payload){
    console.log(payload.req.body)
}

module.exports = {
    list,

    partnerList,

    partnerRemove,

    partnerCreate,
};

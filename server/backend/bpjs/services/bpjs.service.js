const request = require('request');

const createBSyncsHandlers = {
    'action': createBSyncRequest,
    'listen': createBWaitForRequest
};

function createBPProgram(payload) {
    let flowID = payload.flowID;
    let flowBodyContent = createBSyncs(payload.flowComponentsData);

    let flowProgram = `bp.registerBThread(${flowID}, function () { ${flowBodyContent} });`;

    console.log("in creat BPprogram", flowProgram);

    let flowPayload = {
        "userEmail": "t@gmail.com",
        "flowID": flowID,
        flow: flowProgram
    };

    sendBPProgram(flowPayload);
}

function createBSyncs(payload) {
    let BSyncs = [];

    for (let i = 0; i < payload.length; i++) {
        let BSync = createBSyncsHandlers[payload[i].type](payload[i]);
        BSyncs.push(BSync);
    }

    return BSyncs.join('');
}

function createBWaitForRequest(payload) {
    // TODO: get the id of the bp components from the db.
    let bpID = payload.title;

    return `bp.sync({waitFor: bp.Event('${bpID}')});`;
}

function createBSyncRequest(payload) {
    // TODO: get the id of the bp components from the db.
    let bpID = payload.title;

    return `bp.sync({request: bp.Event('${bpID}')});`;
}

function sendBPProgram(payload) {
    request.post(
        'http://localhost:7000/save',
        {json: payload},
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
            }
        }
    );
}

module.exports = {
    createBPProgram
};

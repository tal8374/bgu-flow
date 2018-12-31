const request = require('request');

const createBSyncsHandlers = {
    'action': createBSyncRequest
};

function createBPProgram(payload) {
    let flowID = payload.flowID;
    let flowContent = createBSyncs(payload.flowData);

    let template = `bp.registerBThread(${flowID}, function () { ${flowContent} });`;

    let tosend = {
        "userEmail": "t@gmail.com",
        "flowID": flowID,
        flow: template
    };

    sendBPProgram(tosend);
}

function createBSyncs(payload) {
    let BSyncs = [];

    for (let i = 0; i < payload.length; i++) {
        let BSync = createBSyncsHandlers[payload[i].type](payload[i]);
        BSyncs.push(BSync);
    }

    return BSyncs.join('');
}

function createBSyncRequest(payload) {
    let bpID = payload.title;

    return `bp.sync({request: bp.Event('${bpID}')});`;
}

function sendBPProgram(payload) {
    request.post(
        'http://localhost:7000/save',
        {json: payload},
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body)
            }
        }
    );
}

module.exports = {
    createBPProgram
};

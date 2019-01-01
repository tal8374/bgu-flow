const request = require('request');

const eventHandlers = {
    'send_mail': sendMail,
    'wait_mail': waitMail
};

function handleEvent(payload) {
    if (!eventHandlers[payload.componentID]) return;

    eventHandlers[payload.componentID](payload)
}

function waitMail(payload) {
    console.log('email was recieved');
    console.log(payload.body);
}

function sendMail(payload) {
    //  TODO: should  get from the db by searching the node id
    nodePayload = {
        to: 'anatolyi@post.bgu.ac.il',
        title: 'some title',
        message: 'some message'
    };

    request.post(
        'https://maker.ifttt.com/trigger/send_mail/with/key/S6k39eaZWwg-3oEbJ2_-H',
        {
            json: {
                "value1": nodePayload.to,
                "value2": nodePayload.title,
                "value3": nodePayload.message,
            }
        },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body)
                console.log('mail was sent')
            }
        }
    );
}

module.exports = {
    handleEvent
};

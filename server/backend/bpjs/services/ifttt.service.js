const request = require('request');

const eventHandlers = {
    'send_mail': sendMail
};

function handleEvent(payload) {
    if (!eventHandlers[payload.flowID]) return;

    eventHandlers[payload.flowID](payload.flowPayload)
}

function sendMail(payload) {
    request.post(
        'https://maker.ifttt.com/trigger/send_mail/with/key/S6k39eaZWwg-3oEbJ2_-H',
        {
            json: {
                "value1": payload.to,
                "value2": payload.title,
                "value3": payload.message,
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

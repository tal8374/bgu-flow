const request = require('request');

const eventHandlers = {
    'send_mail': sendMail,
    'sms':sendSms,
    'Add schedule': sechedule,
};

function handleEvent(payload) {
    if (!eventHandlers[payload.componentID]) return;

    eventHandlers[payload.componentID](payload)
}

function sendMail(payload) {
    //  TODO: should  get from the db by searching the node id
    console.log(payload);
    request.post(
        'https://maker.ifttt.com/trigger/send_mail/with/key/S6k39eaZWwg-3oEbJ2_-H',
        {
            json: {
                "value1": payload.data.to,
                "value2": payload.data.title,
                "value3": payload.data.message,
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
function sendSms(payload){
    request.post(
        'https://maker.ifttt.com/trigger/phoneMessege/with/key/dxV-wuKUxcP9AWCS5J10PW',
        {
            json: {
                "value1": payload.data.to,
                "value2": payload.data.message,
            }
        },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body)
                console.log('Sms was sent')
            }
        }

    );
}
function sechedule(payload){
    console.log("in the function");
}
module.exports = {
    handleEvent
};

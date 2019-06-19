const request = require('request');

const eventHandlers = {
    'send_mail': sendMail,
    'sms':sendSms,
    'Add_schedule': sechedule,
};

function handleEvent(payload) {
    if (!eventHandlers[payload.componentID]) return;

    console.log("******************************")
    console.log('payload')
    console.log(payload)

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
        'https://maker.ifttt.com/trigger/phone/with/key/dew4FCOfg1RSDzui4ViiyO',
        {
            json: {
                "value1": payload.data.to,
                "value2": payload.data.from,
                "value3": payload.data.message,
            }
        },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
                console.log('Sms was sent');
            }
        }

    );
}
function sechedule(payload){
    console.log('started!!!!!!!!!!')
    request.post(
        'https://maker.ifttt.com/trigger/calendarEvent/with/key/dew4FCOfg1RSDzui4ViiyO',
        {
            json: {
                "value1": payload.data.date,
                "value2": payload.data.title,
                "value3": payload.data.mail,
            }
        },
        function (error, response, body) {
            console.log('done!!!!!!!!!!!!!!!')
            console.log(error)
            if (!error && response.statusCode == 200) {
                console.log(body);
                console.log('schedule sent');
            }
        }

    );
}
module.exports = {
    handleEvent
};

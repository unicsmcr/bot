const
    config = require('config'),
    helpers = require('./helpers'),
    request = require('request');

const PAGE_ACCESS_TOKEN = process.env.HACKSOC_BOT_PAGE_ACCESS_TOKEN
    ? process.env.HACKSOC_BOT_PAGE_ACCESS_TOKEN
    : config.get('pageAccessToken');

if (!PAGE_ACCESS_TOKEN) {
    console.error('Missing config value for page access token.');
    process.exit(1);
}

/**
 * This event is called when a message is sent to the bot. The 'message' object format can vary
 * depending on the kind of message that was received. Read more at
 * https://developers.facebook.com/docs/messenger-platform/webhook-reference/message-received.
 */
function handleMessageEvent(event) {
    let senderId = event.sender.id;
    let message = event.quick_reply ? event.quick_reply.payload : event.text;
    sendQuickReply(senderId, message);
}

function sendQuickReply(recipientID, message) {
    message = helpers.normalizeMessage(message);

    let response;

    if (['hello', 'hi', 'hey', 'hyia', 'hei', 'oy', 'greetings', 'how do you do', "m'lady",
        'for the horde'].includes(message)) {
        response = helpers.createResponse('Hello! Nice to meet you. :-)');
    } else if (["what's hacksoc", "what is hacksoc", "whats hacksoc", "who are you", "what are you",
        "what do you do", "why hacksoc"].includes(message)) {
        response = helpers.createResponse(
            "We're a student-led tech society that's based in Manchester. We'd be very happy if " +
            "you dropped by at our events! :-)",
            [['Any upcoming events?', 'any upcoming events?'],
            ["Who's behind HackSoc?", "who's behind hacksoc?"],
            ['Can I join you?', 'can i join you?']]);
    } else {
        response = helpers.createResponse(
            'Hey there! How may I help you?',
            [["What's HackSoc?", "what's hacksoc?"],
            ['Any upcoming events?', 'any upcoming events?'],
            ["Who's behind HackSoc?", "who's behind hacksoc?"],
            ['Can I join you?', 'can i join you?']]);
    }

    let messageData = {
        recipient: {
            id: recipientID
        },
        message: response
    };

    callSendAPI(messageData);
}

function callSendAPI(messageData) {
    request({
        uri: 'https://graph.facebook.com/v2.8/me/messages',
        qs: { access_token: PAGE_ACCESS_TOKEN },
        method: 'POST',
        json: messageData

    }, function(error, response, body) {
        if (error || response.statusCode != 200) {
            console.error('Failed calling the send API:', response.statusCode, response.statusMessage, body.error);
        }
    });
}

module.exports = {
    handleMessageEvent: handleMessageEvent
};
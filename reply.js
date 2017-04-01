const
    config = require('./config'),
    debug = require('./debug'),
    dialog = require('./dialog'),
    helpers = require('./helpers'),
    request = require('request');

/**
 * This event is called when a message is sent to the bot. The 'message' object format can vary
 * depending on the kind of message that was received. Read more at
 * https://developers.facebook.com/docs/messenger-platform/webhook-reference/message-received.
 */
function handleMessageEvent(event) {
    let senderId = event.sender.id;
    let message = event.message;
    let textMessage = message.quick_reply ? message.quick_reply.payload : message.text;
    sendQuickReply(senderId, textMessage);
}

function sendQuickReply(recipientID, message) {
    message = helpers.normalizeMessage(message);

    let response;

    for (let i in dialog.options) {
        let option = dialog.options[i];

        if (option.messages.includes(message)) {
            response = helpers.parseResponse(option.response);
            break;
        }
    }

    if (!response) {
        response = helpers.parseResponse(dialog.default_response);
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
        qs: { access_token: config.pageAccessToken },
        method: 'POST',
        json: messageData
    }, function(error, response, body) {
        if (error || response.statusCode != 200) {
            debug.info.errorCount++;
            console.error('Failed calling the send API:', response.statusCode, response.statusMessage, body.error);
        }
    });
}

module.exports = {
    handleMessageEvent: handleMessageEvent
};
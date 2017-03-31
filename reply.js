const
    config = require('config'),
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
    let payload = event.quick_reply ? event.quick_reply.payload : null;
    sendQuickReply(senderId, payload);
}

function sendQuickReply(recipientID, payload) {
    let messageData = {
        recipient: {
            id: recipientID
        },
        message: {
            text: 'Hello!',
            quick_replies: [
                {
                    'content_type': 'text',
                    'title': 'Hi',
                    'payload': 'HI'
                },
                {
                    'content_type': 'text',
                    'title': 'Hello',
                    'payload': 'HELLO'
                }
            ]
        }
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
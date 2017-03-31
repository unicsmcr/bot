const 
    bodyParser = require('body-parser'),
    config = require('config'),
    crypto = require('crypto'),
    express = require('express'),
    request = require('request');

var app = express();
app.use(bodyParser.json({ verify: verifyRequestSignature }));

// Setup config values before running the code. Can be done by modifying either config/default.json
// or your operating system's environment variables.

const PORT = process.env.PORT
    ? process.env.PORT
    : config.get('port');

if (!PORT) {
    console.error('Missing config value for port.');
    process.exit(1);
}

const APP_SECRET = process.env.HACKSOC_BOT_APP_SECRET
    ? process.env.HACKSOC_BOT_APP_SECRET
    : config.get('appSecret');

if (!APP_SECRET) {
    console.error('Missing config value for app secret.');
    process.exit(1);
}

const PAGE_ACCESS_TOKEN = process.env.HACKSOC_BOT_PAGE_ACCESS_TOKEN
    ? process.env.HACKSOC_BOT_PAGE_ACCESS_TOKEN
    : config.get('pageAccessToken');

if (!PAGE_ACCESS_TOKEN) {
    console.error('Missing config value for page access token.');
    process.exit(1);
}

const VALIDATION_TOKEN = process.env.HACKSOC_BOT_VALIDATION_TOKEN
    ? process.env.HACKSOC_BOT_VALIDATION_TOKEN
    : config.get('validationToken');

if (!VALIDATION_TOKEN) {
    console.error('Missing config value for validation token.');
    process.exit(1);
}

const SERVER_URL = process.env.HACKSOC_BOT_SERVER_URL
    ? process.env.HACKSOC_BOT_SERVER_URL
    : config.get('serverURL');

if (!SERVER_URL) {
    console.error('Missing config value for server URL.');
    process.exit(1);
}

app.get('/webhook', function(req, res) {
    if (req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token'] === VALIDATION_TOKEN) {
        console.log('Webhook validated.');
        res.status(200).send(req.query['hub.challenge']);
    } else {
        console.error('Failed validation. Make sure the validation tokens match.');
        res.sendStatus(403);          
    }  
});

app.post('/webhook', function(req, res) {
    var data = req.body;

    if (data.object == 'page') {
        data.entry.forEach(function(pageEntry) {
            var pageID = pageEntry.id;
            var timeOfEvent = pageEntry.time;

            // Iterate over each messaging event.
            pageEntry.messaging.forEach(function(event) {
                if (event.message) {
                    receivedMessage(event);
                } else {
                    console.log('Webhook received unknown messaging event:', event);
                }
            });
        });

        res.sendStatus(200);
    }
});

/**
 * Verifies that the callback came from Facebook. Read more at
 * https://developers.facebook.com/docs/graph-api/webhooks#setup.
 */
function verifyRequestSignature(req, res, buf) {
    var signature = req.headers['x-hub-signature'];

    if (!signature || signature.indexOf('=') === -1) {
        throw new Error('Could not validate the request signature.');
    }
    
    var elements = signature.split('=');
    var signatureHash = elements[1];
    var expectedHash = crypto
        .createHmac('sha1', APP_SECRET)
        .update(buf)
        .digest('hex');

    if (signatureHash != expectedHash) {
        throw new Error('Could not validate the request signature.');
    }
}

/**
 * This event is called when a message is sent to the bot. The 'message' object format can vary
 * depending on the kind of message that was received. Read more at
 * https://developers.facebook.com/docs/messenger-platform/webhook-reference/message-received.
 */
function receivedMessage(event) {
    var senderID = event.sender.id;
    var recipientID = event.recipient.id;
    var timeOfMessage = event.timestamp;
    var message = event.message;

    console.log('Received message for user %d and page %d at %d with message:',
        senderID, recipientID, timeOfMessage);
    console.log(JSON.stringify(message));

    var messageId = message.mid;
    var appId = message.app_id;
    var quickReply = message.quick_reply;

    if (!message.quick_reply) {
        console.log(
            'Could not reply to message %s with metadata "%s".', messageId, message.metadata);
        return;
    }

    sendQuickReply(senderID, payload);
}

function sendQuickReply(recipientID, payload) {
    var messageData = {
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

        var recipientId = body.recipient_id;
        var messageId = body.message_id;

        if (messageId) {
            console.log('Successfully sent message with ID %s to recipient %s.', messageId, recipientId);
        } else {
            console.log('Successfully called the send API for recipient %s.', recipientId);
        }
    });
}

app.listen(PORT, function() {
    console.log('HackSoc bot is running on port %d.', app.get('port'));
});

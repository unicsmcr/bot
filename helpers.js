const
    config = require('./config'),
    crypto = require('crypto');

function parseResponse(response) {
    // Randomly choose a response text from the text array.
    let text = response.text[Math.floor(Math.random() * response.text.length)];

    if (!response.replies) {
        return {
            text: text
        }
    }

    let replies = response.replies.map(function(reply) {
        return {
            'content_type': 'text',
            'title': reply,
            'payload': reply
        };
    });

    return {
        text: text,
        quick_replies: replies
    }
}

function normalizeMessage(message) {
    if (!message) {
        return message;
    }

    message = message.trim();
    message = message.replace("'", '');
    message = message.replace('?', '');
    message = message.replace('.', '');
    message = message.replace('!', '');
    message = message.toLowerCase();
    
    return message;
}

/**
 * Verifies that the callback came from Facebook. Read more at
 * https://developers.facebook.com/docs/graph-api/webhooks#setup.
 */
function verifyRequestSignature(req, res, buf) {
    let signature = req.headers['x-hub-signature'];

    if (!signature || signature.indexOf('=') === -1) {
        res.sendStatus(403);
        throw new Error('Could not validate the request signature.');
    }

    let elements = signature.split('=');
    let signatureHash = elements[1];
    let expectedHash = crypto
        .createHmac('sha1', APP_SECRET)
        .update(buf)
        .digest('hex');

    if (signatureHash != expectedHash) {
        res.sendStatus(403);
        throw new Error('Could not validate the request signature.');
    }
}

module.exports = {
    parseResponse: parseResponse,
    normalizeMessage: normalizeMessage,
    verifyRequestSignature: verifyRequestSignature
};

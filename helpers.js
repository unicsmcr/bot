const
    config = require('config'),
    crypto = require('crypto');

const APP_SECRET = process.env.HACKSOC_BOT_APP_SECRET
    ? process.env.HACKSOC_BOT_APP_SECRET
    : config.get('appSecret');

if (!APP_SECRET) {
    console.error('Missing config value for app secret.');
    process.exit(1);
}

function createResponse(text, quick_replies) {
    let response = {
        text: text
    }

    if (quick_replies) {
        response.quick_replies = quick_replies.map(function(reply) {
            return {
                'content_type': 'text',
                'title': reply[0],
                'payload': reply[1]
            };
        });
    }

    return response;
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
    createResponse: createResponse,
    verifyRequestSignature: verifyRequestSignature
};

const
    crypto = require('crypto'),
    debug = require('../debug');

/**
 * Verifies that the callback came from Facebook. Read more at
 * https://developers.facebook.com/docs/graph-api/webhooks#setup.
 */
function verifyRequestSignature(req, res, buf) {
    let signature = req.headers['x-hub-signature'];

    if (!signature || signature.indexOf('=') === -1) {
        debug.info.errors.unauthorizedCount++;
        res.sendStatus(403);
        throw new Error('Request must include "x-hub-signature" header with value "sha1=...".');
    }

    let elements = signature.split('=');
    let signatureHash = elements[1];
    let expectedHash = crypto
        .createHmac('sha1', config.appSecret)
        .update(buf)
        .digest('hex');

    if (signatureHash != expectedHash) {
        debug.info.errors.unauthorizedCount++;
        res.sendStatus(403);
        throw new Error('Could not validate the request signature.');
    }
}

module.exports = {
    verifyRequestSignature: verifyRequestSignature
};

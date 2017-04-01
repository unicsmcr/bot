const
    config = require('./config'),
    debug = require('./debug'),
    reply = require('./reply');

function setupRoutes(app) {
    app.get('/debug', function(req, res) {
        res.json(debug.info);
    });

    app.get('/webhook', function(req, res) {
        if (req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token'] === config.validationToken) {
            console.log('Webhook validated.');
            res.status(200).send(req.query['hub.challenge']);
        } else {
            debug.info.errors.unauthorizedCount++;
            console.error('Failed validation. Make sure the validation tokens match.');
            res.sendStatus(403);
        }  
    });

    app.post('/webhook', function(req, res) {
        if (req.body.object != 'page') {
            debug.info.errors.badRequestCount++;
            res.sendStatus(400);
            return;
        }

        req.body.entry.forEach(function(pageEntry) {
            // Iterate over each messaging event.
            pageEntry.messaging.forEach(function(event) {
                if (event.message) {
                    reply.handleMessageEvent(event);
                } else {
                    debug.info.errors.unknownMessageCount++;
                    console.log('Webhook received unknown messaging event:', event);
                }
            });
        });

        res.sendStatus(200);
    });
}

module.exports = {
    setupRoutes: setupRoutes
};

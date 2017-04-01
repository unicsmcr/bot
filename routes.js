const
    config = require('./config'),
    reply = require('./reply');

function setupRoutes(app) {
    app.get('/webhook', function(req, res) {
        if (req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token'] === config.validationToken) {
            console.log('Webhook validated.');
            res.status(200).send(req.query['hub.challenge']);
        } else {
            console.error('Failed validation. Make sure the validation tokens match.');
            res.sendStatus(403);
        }  
    });

    app.post('/webhook', function(req, res) {
        let data = req.body;

        if (data.object != 'page') {
            res.sendStatus(400);
            return;
        }

        data.entry.forEach(function(pageEntry) {
            // Iterate over each messaging event.
            pageEntry.messaging.forEach(function(event) {
                if (event.message) {
                    reply.handleMessageEvent(event);
                } else {
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

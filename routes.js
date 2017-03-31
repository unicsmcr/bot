const
    config = require('config'),
    reply = require('./reply');

const VALIDATION_TOKEN = process.env.HACKSOC_BOT_VALIDATION_TOKEN
    ? process.env.HACKSOC_BOT_VALIDATION_TOKEN
    : config.get('validationToken');

if (!VALIDATION_TOKEN) {
    console.error('Missing config value for validation token.');
    process.exit(1);
}

const setupRoutes = function(app) {
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
        let data = req.body;

        if (data.object == 'page') {
            data.entry.forEach(function(pageEntry) {
                let pageID = pageEntry.id;
                let timeOfEvent = pageEntry.time;

                // Iterate over each messaging event.
                pageEntry.messaging.forEach(function(event) {
                    if (event.message) {
                        reply.handleMessage(event);
                    } else {
                        console.log('Webhook received unknown messaging event:', event);
                    }
                });
            });

            res.sendStatus(200);
        }
    });
}

module.exports = {
    setupRoutes: setupRoutes
};

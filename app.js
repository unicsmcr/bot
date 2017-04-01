const 
    bodyParser = require('body-parser'),
    config = require('./config'),
    crypto = require('./crypto'),
    express = require('express'),
    routes = require('./routes');

let app = express();

// Setup authentication and authorization.
app.use(bodyParser.json({ verify: crypto.verifyRequestSignature }));

// Setup the routes.
routes.setupRoutes(app);

// Start the server.
app.listen(config.port, function() {
    console.log('HackSoc bot is running on port %d.', config.port);
});

const 
    bodyParser = require('body-parser'),
    config = require('./config'),
    express = require('express'),
    helpers = require('./helpers'),
    request = require('request'),
    routes = require('./routes');

let app = express();
app.use(bodyParser.json({ verify: helpers.verifyRequestSignature }));

routes.setupRoutes(app);

app.listen(config.port, function() {
    console.log('HackSoc bot is running on port %d.', config.port);
});

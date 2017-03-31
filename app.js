const 
    bodyParser = require('body-parser'),
    config = require('config'),
    express = require('express'),
    helpers = require('./helpers'),
    request = require('request'),
    routes = require('./routes');

let app = express();
app.use(bodyParser.json({ verify: helpers.verifyRequestSignature }));

const PORT = process.env.PORT
    ? process.env.PORT
    : config.get('port');

if (!PORT) {
    console.error('Missing config value for port.');
    process.exit(1);
}

routes.setupRoutes(app);

app.listen(PORT, function() {
    console.log('HackSoc bot is running on port %d.', PORT);
});

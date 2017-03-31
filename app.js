const 
    config = require('config'),
    express = require('express'),

var app = express();
app.set('port', process.env.HTTP_PLATFORM_PORT || 5000);

// Setup config values before running the code. Can be done by modifying either config/default.json
// or your operating system's environment variables.

const APP_SECRET = process.env.HACKSOC_BOT_APP_SECRET
    ? process.env.HACKSOC_BOT_APP_SECRET
    : config.get('appSecret');

if (!APP_SECRET) {
    console.error('Missing config value for app secret.');
    process.exit(1);
}

const VALIDATION_TOKEN = process.env.HACKSOC_BOT_VALIDATION_TOKEN
    ? process.env.HACKSOC_BOT_VALIDATION_TOKEN
    : config.get('validationToken');

if (!VALIDATION_TOKEN) {
    console.error('Missing config value for validation token.');
    process.exit(1);
}

const PAGE_ACCESS_TOKEN = process.env.HACKSOC_BOT_PAGE_ACCESS_TOKEN
    ? process.env.HACKSOC_BOT_PAGE_ACCESS_TOKEN
    : config.get('pageAccessToken');

if (!PAGE_ACCESS_TOKEN) {
    console.error('Missing config value for page access token.');
    process.exit(1);
}

const SERVER_URL = process.env.HACKSOC_BOT_SERVER_URL
    ? process.env.HACKSOC_BOT_SERVER_URL
    : config.get('serverUrl');

if (!SERVER_URL) {
    console.error('Missing config value for server URL.');
    process.exit(1);
}
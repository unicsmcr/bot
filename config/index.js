const config = require('./config.json');

const APP_SECRET = process.env.HACKSOC_BOT_APP_SECRET
    ? process.env.HACKSOC_BOT_APP_SECRET
    : config.appSecret;

if (!APP_SECRET) {
    console.error('Missing config value for app secret.');
    process.exit(1);
}

const PAGE_ACCESS_TOKEN = process.env.HACKSOC_BOT_PAGE_ACCESS_TOKEN
    ? process.env.HACKSOC_BOT_PAGE_ACCESS_TOKEN
    : config.pageAccessToken;

if (!PAGE_ACCESS_TOKEN) {
    console.error('Missing config value for page access token.');
    process.exit(1);
}

const PORT = process.env.PORT
    ? process.env.PORT
    : config.port;

if (!PORT) {
    console.error('Missing config value for port.');
    process.exit(1);
}

const VALIDATION_TOKEN = process.env.HACKSOC_BOT_VALIDATION_TOKEN
    ? process.env.HACKSOC_BOT_VALIDATION_TOKEN
    : config.validationToken;

if (!VALIDATION_TOKEN) {
    console.error('Missing config value for validation token.');
    process.exit(1);
}

module.exports = {
    appSecret: APP_SECRET,
    pageAccessToken: PAGE_ACCESS_TOKEN,
    port: PORT,
    validationToken: VALIDATION_TOKEN
};

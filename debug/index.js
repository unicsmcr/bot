const package = require('../package.json');

const info = {
    version: package.version,
    startTime: new Date().toISOString(),
    errors: {
        badRequestCount: 0,
        sendAPIErrorCount: 0,
        unauthorizedCount: 0,
        unknownMessageCount: 0
    }
};

module.exports = {
    info: info
};

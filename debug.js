const package = require('./package.json');

const info = {
    version: package.version,
    startTime: new Date().toISOString(),
    errorCount: 0
};

module.exports = {
    info: info
};
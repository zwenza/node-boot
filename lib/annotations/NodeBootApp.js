const bootApp = require('../internals/bootApp');

function NodeBootApp(express, port) {
    return () => {
        bootApp.registerApp(express, port);
    }
}

module.exports = NodeBootApp;
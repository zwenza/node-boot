function NodeBootApp(express, port) {
    return target => {
        target.express = express;
        target.port = port;
    }
}

module.exports = NodeBootApp;
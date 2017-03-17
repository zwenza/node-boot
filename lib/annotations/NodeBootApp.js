function NodeBootApp(express, port) {
    return target => {
        target.express = express;
        target.port = port;

        // start express server
        express.listen(port);
    }
}

module.exports = NodeBootApp;
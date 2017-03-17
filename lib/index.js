const NodeBootApp = require('./annotations/NodeBootApp');
const RequestMapping = require('./annotations/RequestMapping');

const bootApp = require('./internals/bootApp');

const lib = {
    NodeBootApp: NodeBootApp,
    RequestMapping: RequestMapping
};

module.exports = lib;
const NodeBootApp = require('./annotations/NodeBootApp');
const RequestMapping = require('./annotations/RequestMapping');

const RequestMethods = require('./internals/RequestMethods');
const bootApp = require('./internals/bootApp');

const lib = {
    NodeBootApp: NodeBootApp,
    RequestMapping: RequestMapping,
    RequestMethod: RequestMethods
};

module.exports = lib;
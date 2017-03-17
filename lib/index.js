const NodeBootApp = require('./annotations/NodeBootApp');
const Controller = require('./annotations/Controller');

const bootstrapNodeBootApp = require('./helpers/bootstrapNodeBootApp');

const lib = {
    NodeBootApp: NodeBootApp,
    Controller: Controller,
    bootstrapNodeBootApp: bootstrapNodeBootApp
};

module.exports = lib;
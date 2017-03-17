const bootApp = require('../internals/bootApp');

function RequestMapping(method, path) {
    return function callback(target, key, descriptor){
        bootApp.registerMapping(method, path, descriptor.value);
        return descriptor;
    }
}

module.exports = RequestMapping;
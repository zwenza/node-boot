function Controller(method, path) {
    return target => {
        target.method = method;
        target.path = path;
    }
}

module.exports = Controller;
const RequestMethod = require('./RequestMethods');

class BootApp {
    registerApp(express, port){
        this.express = express;
        this.port = port;

        express.listen(port);
    };

    registerMapping(method, path, callback){
        switch(method){
            case RequestMethod.GET: this.express.get(path, callback);
                break;
            case RequestMethod.PUT: this.express.put(path, callback);
                break;
            case RequestMethod.POST: this.express.post(path, callback);
                break;
            case RequestMethod.DELETE: this.express.delete(path, callback);
                break;
            default:
                console.warn('RequestMapping ' + path + ' has a invalid method: '
                    + method + 'and cannot be registered!');
        }
    };
}

module.exports = new BootApp();
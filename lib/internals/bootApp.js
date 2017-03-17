class BootApp {
    registerApp(express, port){
        this.express = express;
        this.port = port;

        express.listen(port);
    };

    registerMapping(method, path, callback){
        //TODO make a RequestMethod enum
        if(method === 'GET'){
            this.express.get(path, callback);
        }
    };
}

module.exports = new BootApp();
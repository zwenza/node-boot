const NodeBoot = require('../lib/index');

const NodeBootApp = NodeBoot.NodeBootApp;
const Controller = NodeBoot.Controller;

const bootstrapNodeBootApp = NodeBoot.bootstrapNodeBootApp;

const express = require('express');

@NodeBootApp(express(), 3000)
class App {
    constructor() {
        App.express.get('/', function (req, res) {
            res.send('hello node-boot!');
        });
        App.express.listen(App.port);
    }
}

@Controller('test1', 'test2')
class Test {}

bootstrapNodeBootApp(App);

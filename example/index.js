const NodeBoot = require('../lib/index');

const NodeBootApp = NodeBoot.NodeBootApp;
const RequestMapping = NodeBoot.RequestMapping;

const express = require('express');

@NodeBootApp(express(), 3000)
class App {}

class MyFirstController {
    @RequestMapping('GET', '/')
    mappedEndpoint1(req, res){
        res.send('hello from mapping1!');
    }

    @RequestMapping('GET', '/world')
    mappedEndpoint2(req, res){
        res.send('hello from mapping2!');
    }
}
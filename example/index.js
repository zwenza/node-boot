const NodeBoot = require('../lib/index');

const NodeBootApp = NodeBoot.NodeBootApp;
const RequestMapping = NodeBoot.RequestMapping;
const RequestMethod = NodeBoot.RequestMethod;

const express = require('express');

@NodeBootApp(express(), 3000)
class App {}

class MyFirstController {
    @RequestMapping(RequestMethod.GET, '/')
    mappedEndpoint1(req, res){
        res.send('hello from mapping1!');
    }

    @RequestMapping(RequestMethod.POST, '/world')
    mappedEndpoint2(req, res){
        res.send('hello from mapping2!');
    }
}
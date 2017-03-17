# node-boot

a nodejs library inspired by spring boot to make the development of nodejs apps easy and fast!

## getting started

currently the library isn't available on npm yet. It's not recommended to use it already but if you
like you can checkout the repo and test it in your project.

### usage

node-boot is in a very (very!) early development stage so the API could change on a daily basis. Check the
example if you want to be sure to check out the latest API.

the ``@NodeBootApp`` annotation will bootstrap your application. You need to pass it the express server object 
and the port you want to run your app.

```
@NodeBootApp(express(), 3000)
class App {}
```

Mappings can be done with the ``@RequestMapping`` annotation. 

```
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
```

## Authors

* **David Jöch** - [Github](https://github.com/zwenza) - [Twitter](https://twitter.com/Zwenza)

See also the list of [contributors](https://github.com/zwenza/project/contributors) who participated in this project.
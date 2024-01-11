# azion-theme

The Azion Theme repositorie is focused to share our style kit between interfaces and be used in all projeects inside the company, 
Real Time Manager, Azion Web Site, Landing Pages and all the user iteraction with Azion.


## How to use

To be able to download and publish Azion Github Packages It is necessary a basic Auth autentication.
On your file `~/.npmrc` you need the below configuration:

```
//registry=https://npm.pkg.github/aziontech=true
//npm.pkg.github.com/:_authToken=ghp_SprUskNOYknOQWEDJ02qFX1gB5zeaEd3GTIrs
@aziontech:registry=https://npm.pkg.github.com/
```

> Don't forget to replace the `_authToken` value param. The currently value is a g.e;


## How to install

With the configured autentication you need to:

``` bash
npm install @aziontech/azion-theme;
```

or configure the `package.json` file increasing the dependencie packages;

``` json
{
    "dependencies": {
        "@aziontech/azion-theme": "ˆ0.0.1"
    }
}
```

and you will be able to run `npm install` inside the root of project.

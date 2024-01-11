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


## How to work to develop

To local maintaining you should clone the the `azion-theme` repository and the another one where `azion-theme` will be used;

### Example:
In this example we will use an [azion-web-kit](https://github.com/aziontech/azion-web-kit) example:


``` bash
git clone git@github.com:aziontech/azion-web-kit.git
git clone git@github.com:aziontech/azion-theme.git

cd azion-theme && npm install -g
cd ../azion-web-kit && npm install && npm link ../azion-theme

npm run dev; # any azion-theme modification will be reflected on this dev server with hot reload
```

### How to integrate in the Front-End Project?

On your `App.vue, main.js, index.js` or any anoter project entrypoint you need to import the both files:

``` javascript
import '../node_modules/@aziontech/azion-theme/src/azion-light/theme.scss';
import '../node_modules/@aziontech/azion-theme/src/azion-dark/theme.scss';
```

> Will can import in your main.scss

react-without-server
=====================
This is a basic setup demo with Webpack and React. 

`Single bundle with source map and React setup without server`

### Install
To begin with install the packages which are already specified in package.json. Run the below command
```bash
$ npm install
```

### What is does
It creates bundle.js in build folder using App.js. The bundle.js get hooked up in index.html as javascript source file

### Start bundling
Run below command and check output file -> /build/app.bundle.js
```bash
$ webpack
```

### Check the bundle
See the bundle output by opening index.html in browser

```bash
$ node /build/app.bundle.js
```

###End
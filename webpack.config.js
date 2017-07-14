const webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname, 'build')
var APP_DIR = path.resolve(__dirname,'src')

module.exports = {
    entry: APP_DIR + '/App.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',  //?presets=es2015retainLines=true
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    devtool:"cheap-module-eval-source-map",
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
    ]
}



/*Working Source map - Sat
* source-map  - use it when uglify is disabled
* eval-source-map - this works with uglify but appends random file map extension
* cheap-eval-source-map
* cheap-module-eval-source-map - this looks better with uglify
*
*
* Try with SourceMapDevToolPlugin or source-map-loader libs
* */
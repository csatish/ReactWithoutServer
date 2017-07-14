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
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    devtool:"cheap-eval-source-map",
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            },
            output: {
                comments: true
            },
        }),
    ]
}



/*Working Source map - Sat
*Try with SourceMapDevToolPlugin or source-map-loader libs
* eval-source-map
* cheap-eval-source-map
* cheap-module-eval-source-map
* */
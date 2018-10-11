/**
 * Webpack 4 Build Configuration File for F-E-T-C-H
 * Author: Rajat Kumar
 * 
 */


// Dependencies
var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');
var BUILD_DIR = path.join(__dirname , './dist');
var APP_DIR = path.join(__dirname , './src');
const VENDOR_LIBS = [ 'react' , 'react-dom' , 'axios' , 'bootstrap' , 'react-slick'];

// Entry points
var _entry = {
    bundle : APP_DIR + '/index.js',
    vendor :  VENDOR_LIBS
};

// Output files
var _output = {
    path: BUILD_DIR,
    filename : 'fetch.[name].[chunkhash].js'
};

// Webpack Modules & Loaders
var _module = {
    rules: [
        {
            test : /\.js$/,
            exclude: [/node_modules/],
            use: 'babel-loader'
        },
        {
            test : /\.scss$/,
            use: extractTextPlugin.extract({
                fallback : 'style-loader',
                use :  ['css-loader' , 'sass-loader']
                
            })
            
        },
        {
            test : /\.(jpe?g|png|gif|svg)$/i,
            use : 'file-loader'
        }
    ]
};

// Webpack Plugins
var _plugins = [
    new extractTextPlugin('styles/fetch.[name].css'),
    new htmlWebpackPlugin({
        template: APP_DIR + '/index.html'
    })
];

var _optimization = {
    splitChunks: {
        cacheGroups: {
            commons: {
                name: "common",
                test: /node_modules/,
                chunks: "all"
            },
            vendor: {
                test: /node_modules/,
                chunks: "initial",
                name: "vendor",
                priority: 10,
                enforce: true
            }
        }
    }
};

// Configuration Definition
var config = {

    entry : _entry,

    output : _output,

    module : _module,

    plugins: _plugins,

    optimization : _optimization

}


// Exporting the Configuration
module.exports = config;
/**
 * EXPRESS SERVER FILE
 * Author: Rajat Kumar
 * 
 */

// Dependencies
import express from 'express';
import cors from 'cors';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';
const DEV_LOCALHOST_PORT = 8080;


/**
 * Entry point for webpack config
 * 
 */
webpackConfig.entry["server"] = "webpack/hot/dev-server";
webpackConfig.entry["client"] = "webpack-hot-middleware/client";



// Express app
var app = express();


// Middlewares
app.use(cors());
app.use(express.static(path.join(__dirname , "../dist")));


/**
 * Listening to port 8080
 * @todo Import from config file
 */
app.listen(DEV_LOCALHOST_PORT , ()=>{console.log(`Express Server listening on port ${DEV_LOCALHOST_PORT}!!`)});
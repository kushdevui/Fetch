/**
 * EXPRESS SERVER FILE
 * Author: Rajat Kumar
 *
 */

// Dependencies
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';
import Routes from './fetch_routes';
import errorHandler from './bone_helpers/bone.error_handler';
import jwt from './bone_helpers/bone.jwt';
const DEV_LOCALHOST_PORT = 8080;
const compiler = webpack(webpackConfig);


// Express app
var app = express();


// Middlewares
app.use(webpackDevMiddleware(compiler , {
    noInfo : true,
    publicPath : webpackConfig.output.publicPath,
    stats : { color : true }
}));

app.use(webpackHotMiddleware(compiler , {
    log : console.log
}));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors());

// use JWT auth to secure the api
//app.use(jwt());

// Hosting Static Files
app.use(express.static(path.join(__dirname , "../dist")));

// API end points
app.use( '/bone' , Routes);

// global error handler
// app.use(errorHandler);


/**
 * Listening to port 8080
 * @todo Import from config file
 */
app.listen(DEV_LOCALHOST_PORT , ()=>{console.log(`Express Server listening on port ${DEV_LOCALHOST_PORT}!!`)});

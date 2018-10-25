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
import mongoose from 'mongoose';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';
const DEV_LOCALHOST_PORT = 8080;
const compiler = webpack(webpackConfig);
const db = `fetch`;


// /**
//  * Entry point for webpack config
//  * 
//  */
// webpackConfig.entry["server"] = "webpack/hot/dev-server";
// webpackConfig.entry["client"] = "webpack-hot-middleware/client";



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
app.use(cors());
app.use(express.static(path.join(__dirname , "../dist")));

// Mongoose connection
mongoose.connect(`mongodb://localhost:27017/${db}` , { useNewUrlParser: true }).then(
    () => {
        console.log('MONGODB connection successfull!')
    },
    err => {
        console.err(`!!!!ERROR!!!! Occurred connecting to MONGODB : ${err}`);
        throw err;
    }
);  

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;


/**
 * Listening to port 8080
 * @todo Import from config file
 */
app.listen(DEV_LOCALHOST_PORT , ()=>{console.log(`Express Server listening on port ${DEV_LOCALHOST_PORT}!!`)});
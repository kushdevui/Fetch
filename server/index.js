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
import Routes from './fetch_routes';
import errorHandler from './bone_helpers/bone.error_handler';
import jwt from './bone_helpers/bone.jwt';
const DEV_LOCALHOST_PORT = 8080;


// Express app
var app = express();


// Middlewares

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors());

// API end points
app.use( '/bone' , Routes);
// use JWT auth to secure the api
//app.use(jwt());

// global error handler
// app.use(errorHandler);


/**
 * Listening to port 8080
 * @todo Import from config file
 */
app.listen(DEV_LOCALHOST_PORT , ()=>{console.log(`Server listening on port ${DEV_LOCALHOST_PORT}!!`)});

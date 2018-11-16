/**
 * Fetch Routes for APIs
 */

//  Dependencies
import express from 'express';
import usersController from './users/users.controller';
import router from './users/users.controller';


const fetch_router = express.Router();

// Home Page Route
fetch_router.get( '/' , ( req , res , next ) => {
    console.log('Hello Fetch');
    res.send('Hello');
});

// Users Endpoint
fetch_router.use( '/users' , usersController);



// Exporting the Module
export default fetch_router;
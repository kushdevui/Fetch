/**
 * Fetch Routes for APIs
 */

//  Dependencies
import express from 'express';
import usersController from './users/users.controller';


const fetch_router = express.Router();
const app = express();

// Home Page Route
fetch_router.get( '/' , ( req , res , next ) => {
    console.log('Hello Fetch');
    res.send('Hello');
});

// Users Endpoint
app.use( '/users' , usersController);



// Exporting the Module
export default fetch_router;
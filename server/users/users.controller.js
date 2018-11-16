/**
 * 
 * Endpoint controller for all users
 */

//  Dependencies
import express from 'express';


const app = express();
const router = express.Router();

router.get('/' , ( req , res , next ) => {
    res.send('Users Homepage');
})

// Exporting the module
export default router;
/**
 * Database Connections & Management
 */

//  Dependencies
import mongoose from 'mongoose';
import config from './bone.config';
import User from '../users/users.model';


// Database Connection
mongoose.connect(config.connectionString , { useNewUrlParser: true })
    .then( () => console.log(config.successMsg))
    .catch( () => console.error(config.errorMsg));

// Get Mongoose to use the global promise library    
mongoose.Promise = global.Promise;

export default {
    User: User
};

/**
 * Mongoose models for fetch
 * 
 * 
 */


// Dependencies
import User from './users_model';
import mongoose from 'mongoose';

var kush = new User({
    _id : mongoose.Types.ObjectId(),
    user_id : "kkuma013",
    user_name : {
        user_first_name : "Kush",
        user_last_name : "Kumar"
    },
    user_email : "kush.gupta1609@gmail.com",
    user_phone : [
        {
            phone : 9999999999
        }
    ],
    user_password : "abv12342",
    user_type : "user",
    user_status : "active",
    user_city:"Gurgaon",
    user_state:"Haryana",
    user_pincode:122016,
    user_gender:"Male"
});

export default {
    user : kush
}
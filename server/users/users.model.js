/**
 * Users Schema for MongoDB
 * Mongoose Model Definition
 * 
 * Author(s) : Rajat Kumar
 */



// Dependencies
import mongoose from 'mongoose';
import userConfig from './user.config';
import uniqueValidator from 'mongoose-unique-validator';



const users_schema = mongoose.Schema({
    user_id : {
        type : String,
        required : [true , "Cannot Be Blank"],
        unique : true,
        index : true
    },
    user_name : {
        user_first_name : {
            type : String,
            required : true
        },
        user_middle_name : {
            type : String,
            required : false
        },
        user_last_name : {
            type : String,
            required : true
        }
    },
    user_email : {
        type : String, 
        required : [true , "Cannot Be Blank"],
        unique : true,
        index : true
    },
    user_phone_numbers : [
         {
            type : [Number],
            required : true,
            validate : {
                validator : (phone) => {
                    return userConfig.phone_regex.test(phone)
                }
            },
            index : true
        }
    ],
    user_password : {
        type : String, 
        required : true
    },
    user_type : {
        type : String,
        required : true,
        default : "USER",
        match : [userConfig.user_type , "Invalid Type"]
    },
    user_status : {
        isActive : Boolean
    },
    user_addresses : [
        {
        address_line_one : String,
        address_line_two : String,
        user_city : String,
        user_state : String,
        user_pincode : Number,
        lat : Number,
        long : Number
    }
],
    user_gender : String,
    user_dob : {
        type : Date,
        required : false
    },
    optedForNewsletter : Boolean
});

users_schema.path("user_email").validate( (email) => {
    return userConfig.email_regex.test(email);
} , "Invalid Email");


// Validating Unique User
users_schema.plugin(uniqueValidator , { message : "User Already Exists"} );

// Exporting the Users Model
export default mongoose.model('users' , users_schema);

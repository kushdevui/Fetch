/**
 * Users Schema for MongoDB
 * Mongoose Model Definition
 * 
 * Author(s) : Rajat Kumar
 */



// Dependencies
import mongoose from 'mongoose';
const email_regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
const phone_regex = /^[1-9]{1}[0-9]{9}$/;



const users_schema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    user_id : {
        type : String,
        required : true,
        unique
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
        required : true,
        validate : {
            validator : (email) => {
                return email_regex.test(email);
            },
            message : `Please enter a valid Email Address`
        }
    },
    user_phone : [{
        phone : {
            type : Number,
            required : true,
            validate : {
                validator : (phone) => {
                    return phone_regex.test(phone);
                },
                message : `Phone number must contain 10 digits`
            }
        }
    }],
    user_password : {
        type : String, 
        required : true
    },
    user_type : {
        type : String,
        required : true
    },
    user_status : String,
    user_city : String,
    user_state : String,
    user_pincode : Number,
    user_gender : String,
    user_dob : {
        type : Date,
        required : false
    }
});

export default mongoose.model('users' , users_schema);

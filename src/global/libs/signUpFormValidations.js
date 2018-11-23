/**
 * Error & Warning Validations for Signup form 
 */


/** 
 * @param {signup_first_name, signup_last_name, signup_email, signup_phone, signup_password} values 
 */
export const validate = values => {
    console.log(values);
    const errors = {};

    if(!values.signup_first_name) {
        errors.signup_first_name = "First Name is Required";
    } else if(!/[A-Za-z]/.test(values.signup_first_name)) {
        errors.signup_first_name = "Please enter only alphabets";
    }

    if(!values.signup_last_name) {
        errors.signup_last_name = "Last Name is Required";
    } else if(!/[A-Za-z]/.test(values.signup_last_name)) {
        errors.signup_last_name = "Please enter only alphabets";
    }

    if (!values.signup_email) {
        errors.signup_email = "Email Address is Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.signup_email)) {
        errors.signup_email = "Enter a valid email.";
    }

    if(!values.signup_phone) {
        errors.signup_phone = "Phone Number is Required";
    } else if(!(/\b\d\d\d\d\d\d\d\d\d\d\b/.test(values.signup_phone))) {
        errors.signup_phone = "Enter a valid phone number.";
    }

    errors.signup_password = {};
    if(!values.signup_password) {
        errors.signup_password.isEmpty = "Enter a Password";

    } else if(values.signup_password.length < 8) {
        errors.signup_password.isSmall = "Must contain atleast 8 characters";

        if(!(/[!@#$%^&*./0-9]{1,}/.test(values.signup_password))) {
            errors.signup_password.isInvalid = "Must contain atleast one number or symbol";
        }
    }

    return errors;
};



/**
 * 
 * @param {signup_first_name, signup_last_name, signup_email, signup_phone, signup_password} values 
 */
export const warn = values => {
    const warnings = {};
    warnings.signup_password = {};
    if(values.signup_password && (/123456789?0?/.test(values.signup_password) || /\d\d\d\d\d\d\d\d[0-9]{0,}/.test(values.signup_password) || values.signup_password.length <= 8)) {
        warnings.signup_password.isWeak = "Weak Password";
    } else if(values.signup_password && values.signup_password.length >8 && values.signup_password.length <= 12) {
        warnings.signup_password.isFair = "Fair Password";
    } else if(values.signup_password && values.signup_password.length > 12) {
        warnings.signup_password.isStrong = "Strong Password";
    }
    return warnings;
};
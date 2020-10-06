module.exports= {
    errorMessages: {
        //createAccount
        CREATE_ACCOUNT_ERROR: 'cannot create account, make sure all required field is given',
        CREATE_ACCOUNT_DETAIL_ERROR: 'Something wrong in create user account, profile, contact, and address',
        
        //reset password
        PASSWORD_NOT_MATCHED: 'password and confirmPassword are not matched',

        //forgot password
        SEND_OTP_ERROR: 'cannot send OTP, try again later',

        //validate OTP
        OTP_EXPIRED: 'OTP is expired',
        OTP_WRONG: 'OTP is wrong, Try again!',

        GET_USER_DETAIL_ERROR: 'details are not found, either user account or profile, or contact, or address are not found'
    },
    ACTIVATION_KEY_EXPIRED_TIME: 3 //in day
}
module.exports= {
    errorMessages: {
        //general error
        GENERAL_ERROR: 'Something is wrong in our server',
        NOT_FOUND: 'No document found', //404
        NOT_AUTHORIZED: 'You are not authorized', //401
        FORBIDDEN: 'You don\'t have access', //403
        FIELD_EMPTY: 'Please input all the field',

        // for login
        LOGIN_INVALID: 'Invalid username or password',
        ACCOUNT_HAS_NOT_ACTIVATED: 'Please activate your account first',

        //for activate account
        ACTIVATE_INVALID: 'credentials are invalid',
        WRONG_ACTIVATION_KEY: 'Activation Key is wrong',
        ACTIVATED_ALREADY: 'Account already activated',

        NOT_LOGGED_IN: 'You are not logged in! Please login in to continue'
    },
}
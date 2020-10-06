
const event = 'auth';

export const getUsername = (state) => state[event].username;
export const getEmail = (state) => state[event].email;
export const getToken = (state) => state[event].token;
export const getMessage = (state) => state[event].message;

export const getIsLoggedIn = (state) => state[event].isLoggedIn;
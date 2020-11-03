import { actionTypes } from '../../constants/general.constant';

// template for SET action, key is the state name, value is the state value that want to set
const set = (key, value) => ({
  type: actionTypes.SET,
  payload: {
    key,
    value,
  },
});

export const setUsername = (username) => set('username', username);
export const setEmail = (email) => set('email', email);
export const setIsLoggedIn = (value) => set('isLoggedIn', value);

// set user JWT token
export const setToken = (token) => set('token', token);
// set message, message must be an object
export const setMessage = (message) => set('message', message);

// reset the Auth state to default value
export const resetState = () => ({
  type: actionTypes.RESET,
  payload: {},
});

// Reset the state first and update certain state
export const resetSet = (obj) => ({
  type: actionTypes.RESET_SET,
  payload: {
    updatedState: obj,
  },
});
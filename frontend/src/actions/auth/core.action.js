import axios from 'axios';
import CacheStore from 'react-native-cache-store';

import {
  setUsername,
  setEmail,
  setToken,
  setIsLoggedIn,
  setMessage as setAuthMessage,
  resetState as resetAuthState,
} from './general.action';
import { API_ENDPOINT } from 'api/general.constant';
import { resetState, setIsLoading } from './general.actions';
import { successMessage, errorMessage } from '../../constants/auth/general.constant';

// get user information from cache
export const getUserCache = () => (dispatch) => {
  dispatch(setIsLoading(true)); // display loading first
  CacheStore.get('auth')
    .then((auth) => {
      dispatch(handleLogin(auth));
    })
    .catch((err) => {
      console.log(err);
      dispatch(setIsLoading(false));
    });
};

// save user information to cache after succesfully login
export const saveUserCache = (data) =>
  CacheStore.set('auth', data)
    .then(() => console.log('save cache success'))
    .catch((err) => console.log(err));

export const handleLogin = (data, isRemember=true) => {
  return async (dispatch) => {
    const defaultErrorMessage = errorMessage.LOGIN_ERROR;
    let result = {
      isSuccess: false,
      errorMessage: defaultErrorMessage
    };
    dispatch(setIsLoading(true));
    if (data) {
      try{
        await axios
          .post(`${API_ENDPOINT}/user/login`, data)
          .then((res) => {
            return res.data.data;
          })
          .then((res) => {
            dispatch(setUsername(res.user.username));
            dispatch(setEmail(res.user.email));
            dispatch(setToken(res.token));
            dispatch(setIsLoggedIn(true));

            if(isRemember)
              saveUserCache(data)

            // set message inside Auth State
            dispatch(
              setAuthMessage({
                type: 'success',
                isShown: false,
                text: successMessage.LOGIN_SUCCESS,
              })
            );
            result = { isSuccess: true };
            return result;
          })
          .catch((err) => {
            dispatch(resetAuthState());
            dispatch(
              setAuthMessage({
                type: 'error',
                isShown: true,
                text: err.response.data?.message || defaultErrorMessage,
              })
            );
            result = { isSuccess: false, errorMessage: err.response.data?.message || defaultErrorMessage };
            return result;
          });
      } catch(err){
        console.log(err)
      }
    }
    dispatch(setIsLoading(false));
    return result;
  };
};

// handle signout here
export const handleSignOut = () => {
  return (dispatch) => {
    dispatch(resetAuthState()); // reset for Auth state
    dispatch(resetState()); // reset for login state
    dispatch(setIsLoggedIn(false));
    CacheStore.remove('auth')
      .then((res) => console.log('sign out, removing cache'))
      .catch((err) => console.log('removing cache failed'));
  };
};
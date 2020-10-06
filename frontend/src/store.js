import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

import auth from './reducers/auth';

const rootReducer = combineReducers({
  auth,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
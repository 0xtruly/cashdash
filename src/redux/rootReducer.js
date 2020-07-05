import { combineReducers } from 'redux';
import * as loggedInUser from './Auth';

/**
 * All reducer functions are combined to state here
 * @returns {Object}
 */
const allReducers = combineReducers({
  loggedInUser: loggedInUser.reducer,
});

export default allReducers;

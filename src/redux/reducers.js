import { combineReducers } from 'redux';

import auth from './auth';
import jogs from './jogs';

const rootReducer = combineReducers({ auth, jogs });

export default rootReducer;

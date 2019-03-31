import { combineReducers } from 'redux';

import app from './app';
import auth from './auth';
import jogs from './jogs';

const rootReducer = combineReducers({ auth, jogs, app });

export default rootReducer;

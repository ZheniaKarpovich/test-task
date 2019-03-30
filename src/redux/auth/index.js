import { handleActions, createActions } from 'redux-actions';

import initialState, * as handlers from './handlers';

export const actions = createActions({
  IS_AUTHENTICATED: undefined,
  AUTHENTICATE_REQUEST: undefined,
  AUTHENTICATE_SUCCESS: undefined,
  AUTHENTICATE_FAILURE: undefined,
  GET_USER_REQUEST: undefined,
  GET_USER_SUCCESS: undefined,
  GET_USER_FAILURE: undefined,
});

const reducer = handleActions(
  new Map([
    [actions.isAuthenticated, handlers.isAuthenticated],
    [actions.authenticateRequest, handlers.authenticateRequest],
    [actions.authenticateSuccess, handlers.authenticateSuccess],
    [actions.authenticateFailure, handlers.authenticateFailure],
    [actions.getUserRequest, handlers.getUserRequest],
    [actions.getUserSuccess, handlers.getUserSuccess],
    [actions.getUserFailure, handlers.getUserFailure],
  ]),
  initialState,
);

export default reducer;

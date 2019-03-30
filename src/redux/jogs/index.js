import { handleActions, createActions } from 'redux-actions';

import initialState, * as handlers from './handlers';

export const actions = createActions({
  GET_JOGS_REQUEST: undefined,
  GET_JOGS_SUCCESS: undefined,
  GET_JOGS_FAILURE: undefined,
});

const reducer = handleActions(
  new Map([
    [actions.getJogsRequest, handlers.getJogsRequest],
    [actions.getJogsSuccess, handlers.getJogsSuccess],
    [actions.getJogsFailure, handlers.getJogsFailure],
  ]),
  initialState,
);

export default reducer;

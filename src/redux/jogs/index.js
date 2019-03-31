import { handleActions, createActions } from 'redux-actions';

import initialState, * as handlers from './handlers';

export const actions = createActions({
  SET_FROM_DATE: undefined,
  SET_TO_DATE: undefined,
  TOGGLE_MODAL: undefined,
  TOGGLE_FILTER: undefined,
  GET_JOGS_REQUEST: undefined,
  GET_JOGS_SUCCESS: undefined,
  GET_JOGS_FAILURE: undefined,
  ADD_JOG_REQUEST: undefined,
  ADD_JOG_SUCCESS: undefined,
  ADD_JOG_FAILURE: undefined,
});

const reducer = handleActions(
  new Map([
    [actions.setToDate, handlers.setToDate],
    [actions.setFromDate, handlers.setFromDate],
    [actions.toggleModal, handlers.toggleModal],
    [actions.toggleFilter, handlers.toggleFilter],
    [actions.getJogsRequest, handlers.getJogsRequest],
    [actions.getJogsSuccess, handlers.getJogsSuccess],
    [actions.getJogsFailure, handlers.getJogsFailure],
    [actions.addJogRequest, handlers.addJogRequest],
    [actions.addJogSuccess, handlers.addJogSuccess],
    [actions.addJogFailure, handlers.addJogFailure],
  ]),
  initialState,
);

export default reducer;

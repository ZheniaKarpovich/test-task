import { handleActions, createActions } from 'redux-actions';

import initialState, * as handlers from './handlers';

export const actions = createActions({
  USE_MOBILE_VERSION: undefined,
  TOGGLE_MENU: undefined,
});

const reducer = handleActions(
  new Map([
    [actions.useMobileVersion, handlers.useMobileVersion],
    [actions.toggleMenu, handlers.toggleMenu],
  ]),
  initialState,
);

export default reducer;

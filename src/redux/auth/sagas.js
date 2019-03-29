import { call, put, takeEvery } from 'redux-saga/effects';

import authentificate from 'http/auth';
import { actions as types } from './index';

function* onAuthenticate() {
  try {
    const params = 'hello';
    const response = yield call(authentificate, params);

    localStorage.setItem('access_token', response.access_token);

    yield put(types.authenticateSuccess({}));
  } catch (error) {
    yield put(types.authenticateFailure(error));
  }
}

const authSagas = [
  takeEvery(types.authenticateRequest, onAuthenticate),
];

/* export function* watchAuthorisationError() {
  yield takeEvery(action => /FAILURE/.test(action.type), checkAuthorization);
} */

export default authSagas;

import { call, put, takeEvery } from 'redux-saga/effects';

import * as authHTTP from 'http/auth';
import { actions as types } from './index';

function* onAuthenticate() {
  try {
    const { response } = yield call(authHTTP.authentificate, process.env.REACT_APP_UUID);

    localStorage.setItem('access_token', response.access_token);

    yield put(types.authenticateSuccess({}));
    yield put(types.getUserRequest());
  } catch (error) {
    yield put(types.authenticateFailure(error));
  }
}

function* onGetUserRequest() {
  try {
    const user = yield call(authHTTP.getUser);

    yield put(types.getUserSuccess(user));
  } catch (error) {
    yield put(types.getUserFailure(error));
  }
}

const authSagas = [
  takeEvery(types.authenticateRequest, onAuthenticate),
  takeEvery(types.getUserRequest, onGetUserRequest),
];

/* export function* watchAuthorisationError() {
  yield takeEvery(action => /FAILURE/.test(action.type), checkAuthorization);
} */

export default authSagas;

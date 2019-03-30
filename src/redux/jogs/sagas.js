import { call, put, takeEvery } from 'redux-saga/effects';

import * as jogsHTTP from 'http/jogs';
import { actions as types } from './index';

function* onGetJogsRequest() {
  try {
    const { jogs } = yield call(jogsHTTP.getJogs);

    yield put(types.getJogsSuccess(jogs));
  } catch (error) {
    yield put(types.getJogsFailure(error));
  }
}

function* onAddJogRequest({ payload }) {
  try {
    const response = yield call(jogsHTTP.addJog, payload);

    console.log(response);

    yield put(types.addJogSuccess());
  } catch (error) {
    yield put(types.addJogFailure(error));
  }
}

const jogsSagas = [
  takeEvery(types.getJogsRequest, onGetJogsRequest),
  takeEvery(types.addJogRequest, onAddJogRequest),
];

export default jogsSagas;

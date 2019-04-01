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
    yield call(jogsHTTP.addJog, payload);

    yield put(types.addJogSuccess());
    yield put(types.getJogsRequest());
    yield put(types.toggleModal());
  } catch (error) {
    yield put(types.addJogFailure(error));
  }
}

const jogsSagas = [
  takeEvery(types.getJogsRequest, onGetJogsRequest),
  takeEvery(types.addJogRequest, onAddJogRequest),
];

export default jogsSagas;

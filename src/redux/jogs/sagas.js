import { call, put, takeEvery } from 'redux-saga/effects';

import getJogs from 'http/jogs';
import { actions as types } from './index';

function* onGetJogsRequest() {
  try {
    const { jogs } = yield call(getJogs);

    yield put(types.getJogsSuccess(jogs));
  } catch (error) {
    yield put(types.getJogsFailure(error));
  }
}

const jogsSagas = [
  takeEvery(types.getJogsRequest, onGetJogsRequest),
];

export default jogsSagas;

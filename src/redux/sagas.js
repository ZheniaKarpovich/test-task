import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import jogs from './jogs/sagas';

export default function* root() {
  yield all([...auth, ...jogs]);
}

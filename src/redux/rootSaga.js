import { all } from 'redux-saga/effects';
import { userAuthSaga } from './Auth';

export default function* rootSaga() {
  yield all([userAuthSaga()]);
}

import { takeLatest } from 'redux-saga/effects'
import { FETCH_USER_INFO } from '../user/types';
import { FetchUserInfo } from './meizam';

export function* rootSaga() {
  yield takeLatest(FETCH_USER_INFO, FetchUserInfo)
}
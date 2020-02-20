import { takeLatest } from 'redux-saga/effects'
import { FETCH_USER_INFO } from '../user/types';
import { FetchUserInfo, FetchGroupTable } from './meizam';
import { FETCH_GROUP_TABLE } from '../groups/types';

export function* rootSaga() {
  yield takeLatest(FETCH_USER_INFO, FetchUserInfo)
  yield takeLatest(FETCH_GROUP_TABLE, FetchGroupTable)
}
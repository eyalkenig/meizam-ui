import { takeLatest } from 'redux-saga/effects'
import { FETCH_USER_INFO, NOT_LOGGED_IN_EXCEPTION } from '../user/types';
import { FetchUserInfo, FetchGroupTable, FetchPrediction } from './meizam';
import { FETCH_GROUP_TABLE } from '../groups/types';
import { ThrowToLogin } from './login';
import { FETCH_PREDICTION } from '../predictions/types';

export function* rootSaga(history: any) {
  yield takeLatest(FETCH_USER_INFO, FetchUserInfo)
  yield takeLatest(FETCH_GROUP_TABLE, FetchGroupTable)
  yield takeLatest(FETCH_PREDICTION, FetchPrediction)
  yield takeLatest(NOT_LOGGED_IN_EXCEPTION, ThrowToLogin, history)
}
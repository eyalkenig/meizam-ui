import { MeizamApi } from "../../services";
import { call, put } from "@redux-saga/core/effects";
import { FETCH_USER_INFO_FAILURE, FETCH_USER_INFO_SUCCESS, NOT_LOGGED_IN_EXCEPTION } from "../user/types";
import { FETCH_GROUP_TABLE_SUCCESS, FETCH_GROUP_TABLE_FAILURE, FetchGroupTableAction } from "../groups/types";

export function* FetchUserInfo() {
  try {
     const data = yield call(MeizamApi.FetchUserInfo)
     yield put({type: FETCH_USER_INFO_SUCCESS, payload: data})
  } catch (error) {
     if (error.message == 'must be logged in') {
        yield put({type: NOT_LOGGED_IN_EXCEPTION})
        return
     }
     yield put({type: FETCH_USER_INFO_FAILURE, payload: error})
  }
}

export function* FetchGroupTable(action: FetchGroupTableAction) {
  try {
     const data = yield call(MeizamApi.FetchGroupTable, action.payload)
     yield put({type: FETCH_GROUP_TABLE_SUCCESS, payload: data})
  } catch (error) {
     if (error.message == 'must be logged in') {
       yield put({type: NOT_LOGGED_IN_EXCEPTION})
       return
     }
     yield put({type: FETCH_GROUP_TABLE_FAILURE, payload: error})
  }
}

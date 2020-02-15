import { MeizamApi } from "../../services";
import { call, put } from "@redux-saga/core/effects";
import { FETCH_USER_INFO_FAILURE, FETCH_USER_INFO_SUCCESS } from "../user/types";

export function* FetchUserInfo() {
  try {
     const data = yield call(MeizamApi.FetchUserInfo)
     yield put({type: FETCH_USER_INFO_SUCCESS, payload: data})
  } catch (error) {
     yield put({type: FETCH_USER_INFO_FAILURE, payload: error})
  }
}
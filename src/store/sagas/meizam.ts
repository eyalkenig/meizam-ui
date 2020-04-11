import { MeizamApi } from '../../services';
import { call, put, select } from '@redux-saga/core/effects';
import { createGroupSuccess, createGroupFailure } from '../groups/actions';
import { userSelector } from '../selectors/user';
import {
	FETCH_USER_INFO_FAILURE,
	FETCH_USER_INFO_SUCCESS,
	NOT_LOGGED_IN_EXCEPTION,
} from '../user/types';
import {
	FETCH_GROUP_TABLE_SUCCESS,
	FETCH_GROUP_TABLE_FAILURE,
	FetchGroupTableAction,
	CreateGroupAction,
} from '../groups/types';
import {
	FetchPredictionAction,
	FETCH_PREDICTION_SUCCESS,
	FETCH_PREDICTION_FAILURE,
} from '../predictions/types';

export function* FetchUserInfo() {
	try {
		const data = yield call(MeizamApi.FetchUserInfo);
		yield put({ type: FETCH_USER_INFO_SUCCESS, payload: data });
	} catch (error) {
		yield put({ type: FETCH_USER_INFO_FAILURE, payload: error });
	}
}

export function* FetchGroupTable(action: FetchGroupTableAction) {
	try {
		const data = yield call(MeizamApi.FetchGroupTable, action.payload);
		yield put({ type: FETCH_GROUP_TABLE_SUCCESS, payload: data });
	} catch (error) {
		yield put({ type: FETCH_GROUP_TABLE_FAILURE, payload: error });
	}
}

export function* FetchPrediction(action: FetchPredictionAction) {
	try {
		const data = yield call(MeizamApi.FetchPrediction, action.payload);
		yield put({ type: FETCH_PREDICTION_SUCCESS, payload: data });
	} catch (error) {
		console.log('failed to fetch prediction:');
		console.log(error);
		yield put({ type: FETCH_PREDICTION_FAILURE, payload: error.message });
	}
}

export function* CreateGroupSaga(action: CreateGroupAction) {
	const { id } = yield select(userSelector);
	const body = {
		...action.payload,
		managerId: id,
	};
	try {
		const res = yield call(MeizamApi.CreateGroup, body);
		yield put(createGroupSuccess(res.id));
	} catch (error) {
		console.log(error.message);
		yield put(createGroupFailure(error));
	}
}

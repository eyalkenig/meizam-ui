import {
	GroupsActionTypes,
	CreateGroupActionTypes,
	FETCH_GROUP_TABLE,
	SEARCH_GROUP_TABLE,
	CreateGroupBody,
	CREATE_GROUP,
	CREATE_GROUP_SUCCESS,
	CREATE_GROUP_FAILURE,
	RESET_CREATE_GROUP_STATE,
} from './types';

export function fetchGroupTable(groupId: number): GroupsActionTypes {
	return {
		type: FETCH_GROUP_TABLE,
		payload: groupId,
	};
}

export function searchGroupTable(payload: string): GroupsActionTypes {
	return {
		type: SEARCH_GROUP_TABLE,
		payload,
	};
}

export const createGroup = (
	payload: CreateGroupBody
): CreateGroupActionTypes => ({
	type: CREATE_GROUP,
	payload,
});

export const createGroupSuccess = (
	groupId: string
): CreateGroupActionTypes => ({
	type: CREATE_GROUP_SUCCESS,
	payload: groupId,
});

export const createGroupFailure = (
	payload: string
): CreateGroupActionTypes => ({
	type: CREATE_GROUP_FAILURE,
	payload,
});

export const resetCreateGroupState = () => ({
	type: RESET_CREATE_GROUP_STATE,
});

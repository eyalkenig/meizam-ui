import {
	GroupsState,
	GroupsActionTypes,
	FETCH_GROUP_TABLE_SUCCESS,
	FETCH_GROUP_TABLE,
	SEARCH_GROUP_TABLE,
	FETCH_GROUP_TABLE_FAILURE,
	CREATE_GROUP,
	CREATE_GROUP_SUCCESS,
	CREATE_GROUP_FAILURE,
	RESET_CREATE_GROUP_STATE,
} from './types';

const groupInitialState: GroupsState = {
	groups: [],
	tableView: {
		selectedGroupId: 0,
		table: [],
	},
	fetching: false,
	hasFetchingError: false,
	searchText: '',
	submitted: false,
	submitting: false,
	hasError: false,
	createdGroupId: '',
};

export function groupReducer(
	state = groupInitialState,
	action: GroupsActionTypes
): GroupsState {
	switch (action.type) {
		case FETCH_GROUP_TABLE:
			return {
				...state,
				tableView: {
					selectedGroupId: action.payload,
					table: [],
				},
				fetching: true,
				hasFetchingError: false,
			};
		case FETCH_GROUP_TABLE_SUCCESS:
			return {
				...state,
				tableView: {
					selectedGroupId: action.payload.groupId,
					table: action.payload.table,
				},
				fetching: false,
				hasFetchingError: false,
			};
		case FETCH_GROUP_TABLE_FAILURE:
			return {
				...state,
				fetching: false,
				hasFetchingError: true,
			};
		case SEARCH_GROUP_TABLE:
			return {
				...state,
				searchText: action.payload,
				hasFetchingError: false,
			};

		case CREATE_GROUP:
			return {
				...state,
				submitting: true,
			};

		case CREATE_GROUP_SUCCESS:
			return {
				...state,
				submitting: false,
				submitted: true,
				createdGroupId: action.payload,
			};

		case CREATE_GROUP_FAILURE:
			return {
				...state,
				submitting: false,
				hasError: true,
			};

		case RESET_CREATE_GROUP_STATE:
			return {
				...state,
				submitted: false,
				submitting: false,
				hasError: false,
			};
		default:
			return state;
	}
}

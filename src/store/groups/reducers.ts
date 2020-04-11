import {
	GroupsState,
	CreateGroupState,
	GroupsActionTypes,
	CreateGroupActionTypes,
	FETCH_GROUP_TABLE_SUCCESS,
	FETCH_GROUP_TABLE,
	SEARCH_GROUP_TABLE,
	FETCH_GROUP_TABLE_FAILURE,
	CREATE_GROUP,
	CREATE_GROUP_SUCCESS,
	CREATE_GROUP_FAILURE,
} from './types';

const initialState: GroupsState = {
	groups: [],
	tableView: {
		selectedGroupId: 0,
		table: [],
	},
	fetching: false,
	hasFetchingError: false,
	searchText: '',
};

export function groupReducer(
	state = initialState,
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
		default:
			return state;
	}
}

const createGroupInitialState: CreateGroupState = {
	submitted: false,
	submitting: false,
	hasError: false,
};

export function createGroupReducer(
	state = createGroupInitialState,
	action: CreateGroupActionTypes
) {
	switch (action.type) {
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
			};

		case CREATE_GROUP_FAILURE:
			return {
				...state,
				submitting: false,
				hasError: true,
			};

		default:
			return state;
	}
}

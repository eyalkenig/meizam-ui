import { 
  GroupsState, 
  GroupsActionTypes, 
  FETCH_GROUP_TABLE_SUCCESS, 
  Group, 
  FETCH_GROUP_TABLE, 
  SEARCH_GROUP_TABLE, 
  FETCH_GROUP_TABLE_FAILURE 
} from "./types";

const initialState: GroupsState = {
    groups: [],
    tableView: {
      selectedGroupId: 0,
      table: []
    },
    fetching: false,
    hasFetchingError: false,
    searchText: ''
}

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
            table: []
          },
          fetching: true,
          hasFetchingError: false
        }
      case FETCH_GROUP_TABLE_SUCCESS:
        return {
          ...state,
          tableView: {
            selectedGroupId: action.payload.groupId,
            table: action.payload.table
          },
          fetching: false,
          hasFetchingError: false,
        }
      case FETCH_GROUP_TABLE_FAILURE:
        return {
          ...state,
          fetching: false,
          hasFetchingError: true,
        }
      case SEARCH_GROUP_TABLE:
          return {
            ...state,
            searchText: action.payload,
            hasFetchingError: false,
          }
      default:
        return state
    }
  }
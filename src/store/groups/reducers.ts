import { GroupsState, GroupsActionTypes, FETCH_GROUP_TABLE_SUCCESS, Group, FETCH_GROUP_TABLE } from "./types";

const initialState: GroupsState = {
    groups: [],
    tableView: {
      selectedGroupId: 0,
      table: []
    }
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
          }
        }
      case FETCH_GROUP_TABLE_SUCCESS:
        return {
          ...state,
          tableView: {
            selectedGroupId: action.payload.groupId,
            table: action.payload.table
          }
        }
      default:
        return state
    }
  }